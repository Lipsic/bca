import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
//Form validation imports
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
// import yup from "yup";
import { object, string, number, date } from "yup";
let userSchema = object({
  cpf: number("Verifique se o CPF está correto").required().format(),
  nome: string().required(),
  celular: number("Número inválido").required(),
  email: string("Email inválido").email(),
  confirm: string("Verifique se está igual ao email inserido").email(),
  createdOn: date().default(() => new Date()),
});

function OpenAcc() {
  const handleSubmit = function (e) {
    e.preventDefault();
  };
  const inputHandler = function (e) {
    // const input = { [e.target.name]: e.target.value };
    console.log("input", e.target.name);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          CPF
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" placeholder="CPF" required />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Nome Completo
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Nome Completo"
            required
            name="nome"
            onChange={inputHandler}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Celular
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" placeholder="Celular" required />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          {/* <Form.Control type="email" placeholder="Email" required /> */}
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage component="div" name="email" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Confirmação de email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="email"
            placeholder="Confirmação de email"
            required
          />
          <Field type="email" name="email" placeholder="Email" />
        </Col>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row}>
          <Form.Check
            type="radio"
            label="Eu li, estou ciente das condições de tratamento dos meus dados
            pessoais e do meu consetimento, quando aplicável conforme descrito
            nes Política de Privacidade"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
            required
          />

          <Col sm={10}></Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Col} className="mb-3">
        <Col className="mt-4 btn" sm={{ span: 10, offset: 2 }}>
          <Button className="btn" type="submit">
            Enviar
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default OpenAcc;
