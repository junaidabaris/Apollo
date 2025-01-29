import { Modal } from "react-bootstrap";

function ImageModalVideo({ showvideo, setShowvideo }) {
  return (
    <Modal
      show={showvideo}
      onHide={() => setShowvideo(false)}
      dialogClassName="modal-100w "
      size="lg"
      aria-labelledby="example-custom-modal-styling-title"
      className="my_own_modal modal_height"
    >
      <Modal.Header closeButton className="modal_custom_header">
        <div
          className="d-flex align-items-center justify-content-between "
          style={{ width: "90%" }}
        >
          <h6>Intro to Workflows</h6>
        </div>
      </Modal.Header>
      <Modal.Body>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/JJ98qxajOpM?si=f5fp7ibXANt24Dtj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Modal.Body>
    </Modal>
  );
}

export default ImageModalVideo;
