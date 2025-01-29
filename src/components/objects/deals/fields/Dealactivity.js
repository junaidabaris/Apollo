import React, { useState } from "react";
import AddFields from "./AddFields";
function Dealactivity() {
    const tableSchema = [
        { name: "Last activity date", type: "Single-line text", properties: ["System"] },
        { name: "Created date", type: "URL", properties: ["System"] },
        { name: "Created by", type: "single-line text", properties: ["System"] },
        { name: "Estimated close date", type: "Multi-line text", subtype: "string", properties: ["System"] },
        { name: "Actual closed date", type: "Tokens", subtype: "string", properties: ["System"] },
        { name: "Stage last updated date", type: "Tokens", properties: ["System"] },
    ];
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            {modalShow ? <AddFields show={modalShow} onHide={() => setModalShow(false)} /> : ""}
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption d-flex justify-content-between align-items-center">
                    <h4 className="heading mb-0 p-2">Deal activity

                    </h4>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Properties</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableSchema?.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.type}</td>
                                    <td>
                                        {item.properties.map((property, index) => (
                                            <span
                                                key={index}
                                                style={{ padding: "7px", backgroundColor: "gray", borderRadius: "9px", margin: "3px", color: "white" }}
                                            >
                                                {property}
                                            </span>
                                        ))}
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-primary">Edit</button>
                                        <button type="button" className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Dealactivity;
