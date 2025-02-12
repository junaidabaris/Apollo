import { useState } from "react";


export const SalespersonFilter = () => {
    const [isChecked, setIsChecked] = useState([{
        Is_any_of : false,
        Is_any_not_of : false,
        Inculid_past_Company : false
    }]);

    const handleCheckboxChange = (key) => {
        setIsChecked((prevState) => ({
          ...prevState,
          [key]: !prevState[key],
        }));
      };
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0 p-2">Company Filter</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-3 mb-3 ">
                                    <div className="d-flex gap-2 items-align-center">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="toggleInput"
                                            checked={isChecked.Is_any_of}
                                            onChange={() => handleCheckboxChange("Is_any_of")}
                                        />
                                        <label for="exampleFormControlInput1" className="form-label"> Is any of</label>
                                    </div>
                                    {isChecked.Is_any_of && <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Company"
                                    />}
                                </div>
                                <div className="col-xl-3 mb-3">
                                    <div className="d-flex gap-2 items-align-center">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="toggleInput"
                                            checked={isChecked.Is_any_not_of}
                                            onChange={() => handleCheckboxChange("Is_any_not_of")}
                                        />
                                        <label for="exampleFormControlInput1" className="form-label"> Is any not of</label>
                                    </div>
                                    {isChecked.Is_any_not_of && <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter Company to excel"
                                    />}
                                </div>

                                <div className="col-xl-3 mb-3">
                                    <div className="d-flex gap-2 items-align-center">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="toggleInput"
                                            checked={isChecked.Inculid_past_Company}
                                            onChange={() => handleCheckboxChange("Inculid_past_Company")}
                                        />
                                        <label for="exampleFormControlInput1" className="form-label"> Inculid past Company</label>
                                    </div>
                                   {isChecked.Inculid_past_Company && <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter past companies"
                                    />}
                                </div>
                                <div className="col-xl-3 mb-3">
                                    <div className="d-flex gap-2 items-align-center">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                        />
                                        <label for="exampleFormControlInput1" className="form-label"> Inculid past Company</label>
                                    </div>
                                </div>
                                <div className="col-xl-6 mt-2 mb-3">
                                    <button className="btn m-0 btn-light w-100 shadow">
                                        <div className="d-flex gap-2 items-align-center">
                                            <input
                                                type="radio" name="know"
                                                className="form-check-input"
                                            />
                                            <label for="exampleFormControlInput1" className="form-label"> Is Know</label>
                                        </div>
                                    </button>
                                </div>
                                <div className="col-xl-6 mt-2 mb-3">
                                    <button className="btn m-0 btn-light w-100 shadow">
                                        <div className="d-flex gap-2 items-align-center">
                                            <input
                                                type="radio" name="know"
                                                className="form-check-input"
                                            />
                                            <label for="exampleFormControlInput1" className="form-label"> Is unKnow</label>
                                        </div>
                                    </button>
                                </div>
                                <div className="col-xl-6 mt-2 mb-3">
                                    <label for="exampleFormControlInput1" className="form-label"> Include list of companies</label>
                                    <textarea class="form-control" />
                                </div>
                                <div className="col-xl-6 mt-2 mb-3">
                                    <label for="exampleFormControlInput1" className="form-label"> Exclude list of companies</label>
                                    <textarea class="form-control" />
                                </div>
                                <div className="col-xl-12 text-center">
                                    <button type="button" className="btn btn-primary">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
