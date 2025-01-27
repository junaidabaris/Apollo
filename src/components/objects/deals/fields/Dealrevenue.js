import React from "react";
function Dealrevenue() {
    const tableSchema = [
        { name: "Deal amount", type: "string", properties: ["System"] },
     
    ];

    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption d-flex justify-content-between align-items-center">
                    <h4 className="heading mb-0 p-2">Deal revenue


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

export default Dealrevenue;
