import React, { useState } from "react";

function DealCreate({ params, accountOptions }) {
  const [formData, setFormData] = useState({
    deal_name: "",
    company: "",
    pipeline: "",
    stage: "",
    estimated_close_date: "",
    owner: "",
    amount: "",
    lead_source: "",
    type: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.deal_name.trim()) {
      newErrors.deal_name = "Deal Name is required.";
    }
    if (!formData.company) {
      newErrors.company = "Company is required.";
    }
    if (!formData.pipeline) {
      newErrors.pipeline = "Pipeline is required.";
    }
    if (!formData.stage) {
      newErrors.stage = "Stage is required.";
    }
    if (!formData.estimated_close_date) {
      newErrors.estimated_close_date = "Estimated Close Date is required.";
    }
    if (!formData.amount || isNaN(formData.amount)) {
      newErrors.amount = "Amount must be a valid number.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    // Submit the form data here
    console.log("Form submitted:", formData);
  };

  return (
    <div style={{ margin: "14px" }}>
      <div className="card">
        <div className="card-body p-0">
          <div className="table-responsive active-projects style-1">
            <div className="tbl-caption tbl-caption-2">
              <h4 className="heading mb-0">
                {params?.id ? "UPDATE" : "ADD"} Deal
              </h4>
            </div>
            <form className="tbl-captionn " onSubmit={handleSubmit}>
              <div className="row inputSty">
                {/* Deal Name */}
                <div className="col-xl-4 mb-3">
                  <label htmlFor="deal_name">Deal Name</label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.deal_name ? "is-invalid" : ""
                    }`}
                    value={formData.deal_name}
                    onChange={handleChange}
                    name="deal_name"
                    id="deal_name"
                    placeholder="Deal Name"
                  />
                  {errors.deal_name && (
                    <div className="invalid-feedback">{errors.deal_name}</div>
                  )}
                </div>

                {/* Company */}
                <div className="col-xl-4 mb-3">
                  <label htmlFor="company">Company</label>
                  <select
                    className={`form-select ${
                      errors.company ? "is-invalid" : ""
                    }`}
                    value={formData.company}
                    onChange={handleChange}
                    name="company"
                    id="company"
                  >
                    <option value="">Select Company</option>
                    {accountOptions?.map((company) => (
                      <option key={company._id} value={company._id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                  {errors.company && (
                    <div className="invalid-feedback">{errors.company}</div>
                  )}
                </div>

                {/* Pipeline */}
                <div className="col-xl-4 mb-3">
                  <label htmlFor="pipeline">Pipeline</label>
                  <select
                    className={`form-select ${
                      errors.pipeline ? "is-invalid" : ""
                    }`}
                    value={formData.pipeline}
                    onChange={handleChange}
                    name="pipeline"
                    id="pipeline"
                  >
                    <option value="">Select pipeline</option>
                    {accountOptions?.map((company) => (
                      <option key={company._id} value={company._id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                  {errors.pipeline && (
                    <div className="invalid-feedback">{errors.pipeline}</div>
                  )}
                </div>

                {/* Stage */}
                <div className="col-xl-4 mb-3">
                  <label htmlFor="stage">Stage</label>

                  <select
                    className={`form-select ${
                      errors.stage ? "is-invalid" : ""
                    }`}
                    value={formData.stage}
                    onChange={handleChange}
                    name="stage"
                    id="stage"
                  >
                    <option value="">Select stage</option>
                    {accountOptions?.map((company) => (
                      <option key={company._id} value={company._id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                  {errors.stage && (
                    <div className="invalid-feedback">{errors.stage}</div>
                  )}
                </div>

                {/* Estimated Close Date */}
                <div className="col-xl-4 mb-3">
                  <label htmlFor="estimated_close_date">
                    Estimated Close Date
                  </label>
                  <input
                    type="date"
                    className={`form-control ${
                      errors.estimated_close_date ? "is-invalid" : ""
                    }`}
                    value={formData.estimated_close_date}
                    onChange={handleChange}
                    name="estimated_close_date"
                    id="estimated_close_date"
                  />
                  {errors.estimated_close_date && (
                    <div className="invalid-feedback">
                      {errors.estimated_close_date}
                    </div>
                  )}
                </div>

                {/* Owner */}
                <div className="col-xl-4 mb-3">
                  <label htmlFor="owner">Owner</label>

                  <select
                    className={`form-select ${
                      errors.owner ? "is-invalid" : ""
                    }`}
                    value={formData.owner}
                    onChange={handleChange}
                    name="owner"
                    id="owner"
                  >
                    <option value="">Select owner</option>
                    {accountOptions?.map((company) => (
                      <option key={company._id} value={company._id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Amount */}
                <div className="col-xl-4 mb-3">
                  <label htmlFor="amount">Amount</label>
                  <input
                    type="number"
                    className={`form-control ${
                      errors.amount ? "is-invalid" : ""
                    }`}
                    value={formData.amount}
                    onChange={handleChange}
                    name="amount"
                    id="amount"
                    placeholder="Amount ($)"
                  />
                  {errors.amount && (
                    <div className="invalid-feedback">{errors.amount}</div>
                  )}
                </div>

                {/* Lead Source */}
                <div className="col-xl-4 mb-3">
                  <label htmlFor="lead_source">Lead Source</label>

                  <select
                    className={`form-select ${
                      errors.lead_source ? "is-invalid" : ""
                    }`}
                    value={formData.lead_source}
                    onChange={handleChange}
                    name="lead_source"
                    id="lead_source"
                  >
                    <option value="">Select lead source</option>
                    {accountOptions?.map((company) => (
                      <option key={company._id} value={company._id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Type */}
                <div className="col-xl-4 mb-3">
                  <label htmlFor="type">Type</label>

                  <select
                    className={`form-select ${errors.type ? "is-invalid" : ""}`}
                    value={formData.type}
                    onChange={handleChange}
                    name="type"
                    id="type"
                  >
                    <option value="">Select type</option>
                    {accountOptions?.map((company) => (
                      <option key={company._id} value={company._id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <div className="col-xl-2 mb-3">
                  <button className="btn btn-primary me-1" type="submit">
                    {params?.id ? "Update" : "Add"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealCreate;
