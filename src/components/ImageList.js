import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const imgList = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="image-list">{imgList}</div>;
};

export default ImageList;
