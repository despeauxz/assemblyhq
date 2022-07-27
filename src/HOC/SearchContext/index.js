import React, { useState } from "react";


export const Context = React.createContext({
  data: [],
	content: null,
  handleData() {},
	handleContentChange() {}
});

const SearchContext = ({ children }) => {
	const [content, setContent] = useState(null);
  const [data, setData] = useState([]);

	return (
		<Context.Provider
			value={{
        data,
				content,
        handleData: data => setData(data),
				handleContentChange: content => setContent(content)
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default SearchContext;
