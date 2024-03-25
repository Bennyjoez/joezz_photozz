import imagesArray from "../../data/galleryData";
import { ImageGallery } from "react-image-grid-gallery";

const Gallery = () => {
  return (
    <ImageGallery
      imagesInfoArray={imagesArray}
      columnWidth={300}
      gapSize={24}
    />
  )
}

export default Gallery