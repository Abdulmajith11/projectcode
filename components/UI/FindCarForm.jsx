import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Car Model" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Model Year" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Booking Date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Booking time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Sports Car</option>
            <option value="non-ac">luxury Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;