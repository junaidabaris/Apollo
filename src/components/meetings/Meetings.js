import { Pagination } from "antd";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { useState } from "react";


const Meetings = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Win & close",
        title_2: 'Meetings',
        path_2: ``
    };

    const [availability, setAvailability] = useState([
        { day: "Monday", slots: [{ from: "09:00 AM", to: "05:00 PM" }] },
        { day: "Tuesday", slots: [{ from: "09:00 AM", to: "05:00 PM" }] },
        { day: "Wednesday", slots: [{ from: "09:00 AM", to: "05:00 PM" }] },
        { day: "Thursday", slots: [{ from: "09:00 AM", to: "05:00 PM" }] },
        { day: "Friday", slots: [{ from: "09:00 AM", to: "05:00 PM" }] },
    ]);

    const handleAddSlot = (dayIndex) => {
        const updatedAvailability = [...availability];
        updatedAvailability[dayIndex].slots.push({ from: "", to: "" });
        setAvailability(updatedAvailability);
    };

    const handleDeleteSlot = (dayIndex, slotIndex) => {
        const updatedAvailability = [...availability];
        updatedAvailability[dayIndex].slots.splice(slotIndex, 1);
        setAvailability(updatedAvailability);
    };

    const handleTimeChange = (dayIndex, slotIndex, field, value) => {
        const updatedAvailability = [...availability];
        updatedAvailability[dayIndex].slots[slotIndex][field] = value;
        setAvailability(updatedAvailability);
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            {/* <SequencesFilter /> */}
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Set up your meeting preferences</h4>

                                    </div>
                                    <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="row">
                                            {availability.map((day, dayIndex) => (
                                                <div className="col-md-12 mb-4" key={day.day}>
                                                    <div className="card">
                                                        <div className="card-header d-flex justify-content-between">
                                                            <div>
                                                                <input
                                                                    type="checkbox"
                                                                    id={`day-${dayIndex}`}
                                                                    className="form-check-input me-2"
                                                                    defaultChecked
                                                                />
                                                                <label htmlFor={`day-${dayIndex}`}>{day.day}</label>
                                                            </div>
                                                            <button
                                                                className="btn btn-primary btn-sm"
                                                                onClick={() => handleAddSlot(dayIndex)}
                                                            >
                                                                Add More
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            {day.slots.map((slot, slotIndex) => (
                                                                <div
                                                                    className="d-flex align-items-center mb-2"
                                                                    key={`slot-${dayIndex}-${slotIndex}`}
                                                                >
                                                                    <input
                                                                        type="time"
                                                                        className="form-control me-2"
                                                                        value={slot.from}
                                                                        onChange={(e) =>
                                                                            handleTimeChange(
                                                                                dayIndex,
                                                                                slotIndex,
                                                                                "from",
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                    />
                                                                    <span className="me-2">to</span>
                                                                    <input
                                                                        type="time"
                                                                        className="form-control me-2"
                                                                        value={slot.to}
                                                                        onChange={(e) =>
                                                                            handleTimeChange(
                                                                                dayIndex,
                                                                                slotIndex,
                                                                                "to",
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                    />
                                                                    {day.slots.length > 1 && (
                                                                        <button
                                                                            className="btn btn-danger btn-sm"
                                                                            onClick={() =>
                                                                                handleDeleteSlot(dayIndex, slotIndex)
                                                                            }
                                                                        >
                                                                            Delete
                                                                        </button>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Meetings