import css from './ImageModal.module.css';
import Modal from 'react-modal';

const ImageModal = ({ isOpen, photo, onClose }) => {
  Modal.setAppElement(document.getElementById('root'));
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={() => onClose(false)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
    >
      <img className={css.modalImg} src={photo.urls.regular} />
    </Modal>
  );
};

export default ImageModal;
