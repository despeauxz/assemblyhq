import React, { Fragment, useState } from "react";
import Skeleton from "react-loading-skeleton";

const ImageLoader = ({
  src,
  desc
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoaded = () => setLoaded(true);

  return (
    <Fragment>
      {!loaded && <Skeleton circle={true} height={32} width={32} />}
      <img src={src} alt={desc} onLoad={handleImageLoaded} />
    </Fragment>
  )
}

export default ImageLoader;
