import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Register.css";

const Register = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className="form_section  bg-secondary">
      <div className="container d-flex justify-content-center">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-center w-50 border rounded py-4"
        >
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="mb-4"
          >
            <Form.Control required type="text" placeholder="First name" />

            <Form.Control.Feedback type="invalid" className="text-warning">
              Required Field
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom02"
            className="mb-4"
          >
            <Form.Control required type="text" placeholder="Last name" />
            <Form.Control.Feedback type="invalid" className="text-warning">
              Required Field
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustomUsername"
            className="mb-4"
          >
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid" className="text-warning">
                Please choose an username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustomUsername"
            className="mb-4"
          >
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid" className="text-warning">
                Please choose an email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustomUsername"
            className="mb-4"
          >
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Password"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid" className="text-warning">
                Please choose a password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3 d-flex">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </section>
  );
};

export default Register;
