import React, { useState } from "react";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Importing the phone input styles

// Example static list of countries (you can expand this list)
const countryOptions = [
  { value: "US", label: "United States" },
  { value: "IN", label: "India" },
  { value: "PK", label: "Pakistan" },
  { value: "AE", label: "United Arab Emirates" },
  // Add more countries as needed
];

const Form = () => {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption.value);
  };

  return (
    <form className="elementor-form" name="Request For free consultation">
      <input type="hidden" name="post_id" value="45463" />
      <input type="hidden" name="form_id" value="430b143" />
      <input
        type="hidden"
        name="referer_title"
        value="Auditing &amp; Accounting Service Companies Dubai | A&amp;A Associate"
      />
      <input type="hidden" name="queried_id" value="45463" />
      <div className="elementor-form-fields-wrapper elementor-labels-">
        {/* Name Field */}
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required">
          <label
            htmlFor="form-field-name"
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

        {/* Phone Number Input using react-phone-number-input */}
        <div className="elementor-field-type-phone_number_prefix_selector_form_field elementor-field-group elementor-column elementor-field-group-country_code elementor-col-60">
          <label
            htmlFor="form-field-mobile_num"
            className="elementor-field-label elementor-screen-only"
          >
            Contact Number
          </label>
          <PhoneInput
            international
            defaultCountry="US"
            value={phone}
            onChange={handlePhoneChange}
            className="elementor-field elementor-size-sm elementor-field-textual"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Email Field */}
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

        {/* Hidden Fields */}
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

        {/* Submit Button */}
        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
          <button type="submit" className="elementor-button elementor-size-sm">
            <span>
              <span className="elementor-button-icon"></span>
              <span className="elementor-button-text">Send Request</span>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
