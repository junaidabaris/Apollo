
import { Modal } from "react-bootstrap";
import { Tabs } from "antd";
function WorkflowsCardbodyModal({ show,setShow,tabData }) {
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-100w"
      size="xl"
      aria-labelledby="example-custom-modal-styling-title"
      className="my_own_modal"
    >
      <Modal.Header closeButton className="modal_custom_header">
        <div
          className="d-flex align-items-center justify-content-between "
          style={{ width: "90%" }}
        >
          <h6> Custom Modal Styling</h6>

          <input
            type="text"
            className="form-control my-input"
            placeholder="Search Templates..."
            style={{ width: "50%" }}
          />
          <div className="d-flex align-items-center ">
            <input
              type="checkbox"
              style={{ width: "20px", height: "20px" }}
              className="me-3 mb-1"
            />
            <h6>Show when creating new workflow</h6>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          tabPosition={"left"}
          items={tabData?.map((item, i) => {
            const id = String(i + 1);
            return {
              label: `${item.title}`,
              key: id,
              children: item?.comp,
            };
          })}
        />
      </Modal.Body>
    </Modal>
  );
}

export default WorkflowsCardbodyModal;
