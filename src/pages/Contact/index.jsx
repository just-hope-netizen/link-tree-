import { Footer } from "../../components/Footer";
import { ContactForm } from "../../components/Form";
import { Container } from "react-bootstrap";

export const Contact = () => {
  return (
    <div className="container-fluid">
      <Container style={{ maxWidth: "720px", margin: "156px auto 0" }}>
        <header>
          <h1
            style={{ fontWeight: "600", fontSize: "36px", lineHeight: "44px" }}
          >
            Contact Me
          </h1>
          <p style={{ fontWeight: "400", fontSize: "20px" }}>
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </header>
        <ContactForm />
      </Container>
      <Footer />
    </div>
  );
};
