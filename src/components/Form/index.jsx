import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { slackUserName } from "../../pages/Home";

export const ContactForm = () => {
  return (
    <Form>
      <Row className="mb-3 flex-column flex-md-row">
        <Col>
          <Form.Group as={Col} className="mb-3 mb-md-0">
            <Form.Label className="mb-0 util-label">First name</Form.Label>
            <Form.Control placeholder="Enter your first name" id="first_name" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group as={Col}>
            <Form.Label className="mb-0 util-label">Last name</Form.Label>
            <Form.Control placeholder="Enter your last name" id="last_name" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Group as={Col}>
          <Form.Label className="mb-0 util-label">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="yourname@email.com"
            id="email"
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3 " style={{ marginTop: "24px" }}>
        <Form.Label className="util-label">Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Send me a message and I'll reply you as soon as possible..."
        />
      </Form.Group>

      <Form.Check
        type={"checkbox"}
        id={`message`}
        style={{ fontSize: "16px", fontWeight: "400" }}
        label={`You agree to providing your data to 
        ${slackUserName} who may contact you.`}
      />
      <Col>
        <Button type="submit" id="btn_submit">
          Send message
        </Button>
      </Col>
    </Form>
  );
};
