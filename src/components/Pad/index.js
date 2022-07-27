import React, { useContext } from "react";
import { PadContainer, ListingWrapper, ColorIdentifier } from "../../components/styled";
import history from "../../history";
import { Context } from "../../HOC/SearchContext";
import ImageLoader from "../ImageLoader";

const Pad = () => {
  const { content } = useContext(Context);
  const listItems = ["html_url", "followers_url", "following_url", "gists_url", "starred_url", "subscriptions_url", "organizations_url", "repos_url", "events_url", "received_events_url"];

  const formatTitle = (text) => {
    const textArray = text.split("_");
    return `${textArray[0]} ${textArray[1]}`;
  }

  const navigateBack = () => history.push('/');

  return (
    <PadContainer className="pad">
      <div className="pad__container">
        <button type="button" onClick={navigateBack}>
          <img src="/assets/images/arrow-left.png" alt="Arrow left" />
          Return home
        </button>
        <div className="d-flex justify-between items-center">
          <div className="d-flex items-center">
            <div className="d-flex items-center">
              <ImageLoader src={content?.avatar_url} desc={content?.login} />
              <h3 className="pad__title">{content?.login}</h3>
            </div>
            {content?.url && (
              <a className="target__link" href={content?.url} target="_blank" rel="noreferrer">{content?.url}</a>
            )}
          </div>
        </div>
        <ListingWrapper>
          <div className="input-type">
            <ColorIdentifier inputColor={content.type === "Organization" ? "#B83998" : "#34Eb6B"} />
            {content.type}
          </div>
          <div className="flex">
            {listItems.map((list) => (
              <div className="list" key={list}>
                <h4>{formatTitle(list)}</h4>
                <a className="target__link" href={content[list]} target="_blank" rel="noreferrer">
                  {content[list]}
                </a>
              </div>
            ))}
          </div>
        </ListingWrapper>
      </div>
    </PadContainer>
  );
}

export default Pad;
