import React, { useContext } from "react";
import { SidebarContainer } from "../../components/styled";
import { Context } from "../../HOC/SearchContext";
import ImageLoader from "../ImageLoader";

const Sidebar = () => {
  const { content, data, handleContentChange } = useContext(Context);

  return (
    <SidebarContainer className="sidebar">
      {data.map((node) => (
        <div className="repo" key={node?.id} onClick={() => handleContentChange(node)}>
          {content?.id === node?.id && <span className="repo__active" />}
    
          <div className="repo__content">
            <ImageLoader src={node?.avatar_url} desc={node?.login} />
            <div>
              <div className="repo__title">
                <span>{node?.login}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
