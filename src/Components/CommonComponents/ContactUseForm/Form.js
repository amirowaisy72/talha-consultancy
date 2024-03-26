import React from "react";

const Form = () => {
  return (
    <>
      <form
        className="elementor-form"
        method="post"
        name="Request For free consultation"
      >
        <input type="hidden" name="post_id" value="45463" />
        <input type="hidden" name="form_id" value="430b143" />
        <input
          type="hidden"
          name="referer_title"
          value="Auditing &amp; Accounting Service Companies Dubai | A&amp;A Associate"
        />
        <input type="hidden" name="queried_id" value="45463" />
        <div className="elementor-form-fields-wrapper elementor-labels-">
          <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required">
            <label
              for="form-field-name"
              className="elementor-field-label elementor-screen-only"
            >
              Name
            </label>
            <input
              size="1"
              type="text"
              name="form_fields[name]"
              id="form-field-name"
              className="elementor-field elementor-size-sm elementor-field-textual"
              placeholder="Name*"
              required="required"
              aria-required="true"
            />
          </div>
          <div className="elementor-field-type-phone_number_prefix_selector_form_field elementor-field-group elementor-column elementor-field-group-country_code elementor-col-40">
            <select className="startklar_country_selector">
              <option value="" disabled selected>
                Select Country
              </option>
              <option value="Pakistan">Pakistan</option>
              <option value="Dubai">Dubai</option>
              <option value="America">America</option>
            </select>
          </div>
          <div className="elementor-field-type-number elementor-field-group elementor-column elementor-field-group-mobile_num elementor-col-60 elementor-field-required">
            <label
              for="form-field-mobile_num"
              className="elementor-field-label elementor-screen-only"
            >
              Contact Number
            </label>
            <input
              type="number"
              name="form_fields[mobile_num]"
              id="form-field-mobile_num"
              className="elementor-field elementor-size-sm elementor-field-textual"
              placeholder="5XXXXXXXX"
              required="required"
              aria-required="true"
              pattern="8 to 10 Numbers"
              oninvalid='this.setCustomValidity( "Please match the requested format \"8 to 10 Numbers\" ")'
              oninput='this.setCustomValidity("")'
              min="10000000"
              max
            />
          </div>
          <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
            <input
              size="1"
              type="email"
              name="form_fields[email]"
              id="form-field-email"
              className="elementor-field elementor-size-sm elementor-field-textual"
              placeholder="Email*"
              required="required"
              aria-required="true"
            />
          </div>
          <div className="elementor-field-type-hidden elementor-field-group elementor-column elementor-field-group-field_form_name elementor-col-100">
            <input
              size="1"
              type="hidden"
              name="form_fields[field_form_name]"
              id="form-field-field_form_name"
              className="elementor-field elementor-size-sm elementor-field-textual"
              value="Request For free consultation"
            />
          </div>
          <div className="elementor-field-type-hidden elementor-field-group elementor-column elementor-field-group-field_page_title elementor-col-100">
            <input
              size="1"
              type="hidden"
              name="form_fields[field_page_title]"
              id="form-field-field_page_title"
              className="elementor-field elementor-size-sm elementor-field-textual"
              value="Home"
            />
          </div>
          <div className="elementor-field-type-hidden elementor-field-group elementor-column elementor-field-group-field_page_url elementor-col-100">
            <input
              size="1"
              type="hidden"
              name="form_fields[field_page_url]"
              id="form-field-field_page_url"
              className="elementor-field elementor-size-sm elementor-field-textual"
              value="https://www.aaconsultancy.ae/"
            />
          </div>
          <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
            <button
              type="submit"
              className="elementor-button elementor-size-sm"
            >
              <span>
                <span className="elementor-button-icon"></span>
                <span className="elementor-button-text">Send Request</span>
              </span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
