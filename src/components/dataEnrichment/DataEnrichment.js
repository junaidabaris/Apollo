import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import DataEnrichmentTab from "./dataEnrichmentTab/DataEnrichmentTab";

function DataEnrichment() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Data enrichment",
  };

  return (
    <div>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <header
        className="workflows_header d-flex align-items-center justify-content-between px-3 py-3"
        style={{ borderBottom: "1px solid rgb(211, 206, 206)" }}
      >
        <div>
          <h4>Data enrichment</h4>
        </div>
        {/* <div className="d-flex">
          <div>
            <Button type="btn" variant="primary" onClick={handleShow}>
              <FaUserPlus className="mb-1 me-1" />
              New User
            </Button>
          </div>

          <div>
            <Button type="btn" variant="secondary">
              Export to CSV
            </Button>
          </div>
        </div> */}
      </header>

      <DataEnrichmentTab />

      {/* <NewUsersModal show={show} setShow={setShow} handleClose={handleClose} /> */}
    </div>
  );
}

export default DataEnrichment;
