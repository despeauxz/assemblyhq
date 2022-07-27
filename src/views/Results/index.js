import React, { useEffect, useContext, Fragment, useState } from "react";
import { withRouter } from "react-router";
import { ResultContainer, CentralizedFlex, PageLoader } from "../../components/styled";
import { Context } from "../../HOC/SearchContext";
import history from "../../history";

import puzzledGif from "./puzzled.gif";

import Pad from "../../components/Pad";
import Sidebar from "../../components/Sidebar";

const ResultPage = ({ location }) => {
  const { content, data, handleContentChange, handleData } = useContext(Context);
  const { pathname, search } = location;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async() => {
      setLoading(true);
      try {
        const q = pathname.replace("/search/", "");
        const isOrg = search && search.replace("?type=", "") === "org";
        const response = await fetch(`https://api.github.com/search/users?q=${q}${isOrg ? "+type:org" : ""}`);
        const data = await response.json();
        handleData(data?.items);
        handleContentChange(data?.items[0]);
      } catch (error) {
        throw new Error(error);
      }
      setLoading(false);
    }
    if (!content) {
      getData();
    };

    return () => {
      handleData([]);
      handleContentChange(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateBack = () => history.push('/');

  return (
    <ResultContainer className="result-container">
      {data.length > 0 && !loading && (
        <Fragment>
          <Sidebar />
          <Pad />
        </Fragment>
      )}
      {data.length === 0 && !loading && (
        <div className="no-content">
          <div>
            <img src={puzzledGif} alt="Puzzled" />
            <h3>No result found!</h3>
            <button type="button" onClick={navigateBack}>
              Return home
            </button>
          </div>
        </div>
      )}
      {loading && (
        <CentralizedFlex>
          <PageLoader />
        </CentralizedFlex>
      )}
    </ResultContainer>
  );
};

export default withRouter(ResultPage);
