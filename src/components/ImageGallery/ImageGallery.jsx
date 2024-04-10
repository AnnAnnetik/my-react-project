import ImageCard from '../ImageCard/ImageCard';
<<<<<<< HEAD

export const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {Array.isArray(photos) &&
        photos.map(photo => (
          <li key={photo.id}>
            <ImageCard photo={photo} />
          </li>
        ))}
    </ul>
  );
};
=======
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos, onSelect }) => {
  return (
    <ul className={css.list}>
      {photos.map(photo => (
        <li className={css.item} key={photo.id}>
          <ImageCard card={photo} onSelect={onSelect} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
>>>>>>> 71fc2f9b322743f038cf7de576b4cef737e98dd7
