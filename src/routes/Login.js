import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export function Login() {
  return (
    <div className="containerForms">
      login
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="correo@dominio.com" />
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Pass word" />
        </Form.Group>
      </Form>
    </div>
  );
}
