<<<<<<< HEAD
const ImageCard = ({ photo }) => {
  return (
    <div>
      <div>
        <img
          width={250}
          height={250}
          src={photo.urls.small}
          alt={photo.alt_description}
        />
      </div>
      <h2>{photo.user.name}</h2>
      <p>Likes: {photo.likes}</p>
      <p>Total Likes: {photo.user.total_likes}</p>
      <p>Total Photos: {photo.user.total_photos}</p>
=======
import css from './ImageCard.module.css';

const ImageCard = ({ card, onSelect }) => {
  return (
    <div className={css.container}>
      <img
        className={css.img}
        src={card.urls.small}
        alt={card.alt_description}
        onClick={() =>
          onSelect(true, {
            src: card.urls.regular,
            description: card.alt_description,
          })
        }
      />
>>>>>>> 71fc2f9b322743f038cf7de576b4cef737e98dd7
    </div>
  );
};

export default ImageCard;
