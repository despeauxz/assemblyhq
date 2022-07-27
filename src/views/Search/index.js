import React, { useState, useContext, useEffect, Fragment } from "react";
import { CentralizedContainer, Title, Loader, SpeakerWrapper } from "../../components/styled";
import history from "../../history";
import { Context } from "../../HOC/SearchContext";
import "./index.css";


const searchOptions = ['users', 'organizations']

const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');
  const [micError, setMicError] = useState('');
  const [search, setSearch] = useState('');
  const [option, setOption] = useState('users');

  const { handleData, handleContentChange } = useContext(Context);
  const [isRecording, setisRecording] = useState(false);
  const [stateText, setStateText] = useState("");

  useEffect(() => {
    const isMicEnabled = async () => {
      const permissionStatus = await navigator.permissions.query({
        name: 'microphone'
      });
      return permissionStatus.status === "granted";
    };
    const isEnabled = isMicEnabled();
    
    if (!isEnabled) {
      setMicError('Mic has been turned off');
      setTimeout(() => {
        setMicError("");
      }, 4000);
    }
    if (!loading && isEnabled) {
      startRecordController();
    }

    return () => {
      setisRecording(false);
      setStateText("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecording])

  const startRecordController = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    if (isRecording) {
      recognition.start();
      recognition.onspeechend = () => {
        setisRecording(false);
      };
    } else {
      recognition.stop();
      recognition.onend = () => {
        setisRecording(false);
      };
    }

    recognition.onstart = () => {
      setStateText("Speak Now");
    }
  
    recognition.onresult = async(event) => {
      setStateText("Listening...")
      const recordingResult = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      const capitalizedText = capitalize(recordingResult)
      const { confidence } = event.results[0][0];
      setStateText("Listening...");
      if (confidence > 0.5) {
          await setSearch(capitalizedText);
          setStateText("");
          setTimeout(async() => {
            await handleSearch(capitalizedText);
          }, 2000);
      }
      recognition.stop();
      setisRecording(false);
      recognition.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const capitalize = (str) => str.replace(/^./, str[0].toUpperCase());

  const encodedURL = (text) => {
    const searchURL = text.replaceAll(" ", "+");
    return `/search/${searchURL}${option === "organizations" ? "?type=org" : ""}`;
  }

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  }

  const handleOptionChange = (e) => {
    const { value } = e.target;
    setOption(value);

    const sibling = e.target.nextElementSibling;
    sibling.classList.add("jiggle");
    setTimeout(resetJiggle, 700, sibling);
  }

  const handleSearch = async(text) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/search/users?q=${text}${option === "organizations" ? "+type:org" : ""}`)
      const data = await response.json();
      await handleData(data?.items);
      await handleContentChange(data?.items[0]);
      const url = encodedURL(text);
      history.push(url);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (search.length === 0) {
      return;
    }

    handleSearch(search);
  }

  const exitMicState = () => {
    setisRecording(false);
    setMicError("");
    setStateText("");
  }
  
  const resetJiggle = (e) => e.classList.remove("jiggle");

  return (
    <Fragment>
      <CentralizedContainer className="animate__animated animate__fadeIn">
        <div>
          <div className="title-container">
            <img src="assets/images/logo.jpeg" alt="AssemblyHQ" />
            <Title id="title">Build with Assembly</Title>
          </div>
          <form noValidate onSubmit={handleSubmit}>
            <div className="input-container">
              <div>
                <div className="append-icon">
                  <span>
                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                  </span>
                </div>
                <div className="input-wrapper">
                  <div />
                  <input type="text" name="search" value={search} autoFocus onChange={handleSearchChange} />
                </div>
                {loading && (
                  <div className="mic-wrapper">
                    <div className="mic" role="button" aria-label="Search by voice">
                      <Loader />
                    </div>
                  </div>
                )}
                <div className="mic-wrapper">
                  <div className="mic" id="anim" role="button" aria-label="Search by voice">
                    <span className="tooltip" data-tooltip="Search by voice.">
                      <img src="/assets/images/mic.png" alt="warning" onClick={() => setisRecording((prevState) => !prevState)} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex items-center justify-center">
              {searchOptions.map((opt, i) => (
                <div className="control-group" key={i.toString()}>
                  <input id={opt} type="radio" name="option" checked={option === opt} value={opt} onChange={handleOptionChange} />
                  <label id={`${opt}-label`} htmlFor={opt} className="jiggle-label blue">{opt}</label>
                </div>
              ))}
            </div>
          </form>
        </div>
      </CentralizedContainer>
      {(micError || stateText) && (
        <SpeakerWrapper className="animate__animated animate__fadeIn" onClick={exitMicState}>
          <div className="wrapper">
            <h2>{micError ? micError : stateText}</h2>
            <div>
              <img src="assets/images/big-mic.png" alt="Mic" />
            </div>
          </div>
        </SpeakerWrapper>
      )}
    </Fragment>
  );
};

export default SearchPage;
