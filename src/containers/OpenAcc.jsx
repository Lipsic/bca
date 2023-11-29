import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
//Form validation imports
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { object, string, number, date } from "yup";
import { cpf } from "cpf-cnpj-validator";
import { useReducer } from "react";
let userSchema = object({
  cpf: string()
    .required("Verifique se o CPF está correto!")
    .test((value) => cpf.isValid(value)),
  nome: string().required("Insira seu nome!"),
  celular: number().required("Número inválido!"),
  email: string().email("Email inválido!"),
  confirm: string().email("Verifique se está igual ao email inserido!"),
  createdOn: date().default(() => new Date()),
});
const initialInput = {
  cpf: "",
  cpfValid: false,
  nome: "",
  nomeValid: false,
};
const inputReducer = function (state, action) {
  switch (action.type) {
    case "USER_INPUT__cpf":
      if (state.cpf.length > 11) return state;
      return {
        ...state,
        cpf: cpf?.format(action.value),
        cpfValid: action.value.trim().length > 1,
      };
    case "USER_INPUT__nome":
      return {
        ...state,
        nome: action.value,
        nomeValid: action.value.trim().length > 5,
      };
  }
};
function OpenAcc() {
  const [state, dispatch] = useReducer(inputReducer, initialInput);
  console.log(state);
  const handleSubmit = function (e) {
    e.preventDefault();
  };
  const onInputChange = function (e) {
    dispatch({ type: `USER_INPUT__${e.target.name}`, value: e.target.value });
  };
  console.log("state.cpf.length", state.cpf.length);
  return (
    <Formik validationSchema={userSchema}>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            CPF
          </Form.Label>
          <Col sm={10}>
            <Field
              className="form-control"
              type="string"
              placeholder="CPF"
              name="cpf"
              value={state.cpf}
              onChange={onInputChange}
            />
            <ErrorMessage component="div" name="cpf" />
            {/* <Form.Control type="number" placeholder="CPF" required /> */}
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Nome Completo
          </Form.Label>
          <Col sm={10}>
            <Field
              className="form-control"
              type="text"
              name="nome"
              placeholder="Nome"
              value={state.name}
              onChange={onInputChange}
            />
            <ErrorMessage component="div" name="nome" />
            {/* <Form.Control type="text" placeholder="Nome Completo" required /> */}
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Celular
          </Form.Label>
          <Col sm={10}>
            <Field
              className="form-control"
              type="number"
              name="celular"
              placeholder="Celular"
            />
            <ErrorMessage component="div" name="celular" />
            {/* <Form.Control type="number" placeholder="Celular" required /> */}
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Field
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage component="div" name="email" />
            {/* <Form.Control type="email" placeholder="Email" required /> */}
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Confirmação de email
          </Form.Label>
          <Col sm={10}>
            <Field
              className="form-control"
              type="email"
              name="confirm"
              placeholder="Confirmação de email"
            />
            <ErrorMessage component="div" name="confirm" />
            {/* <Form.Control
              type="email"
              placeholder="Confirmação de email"
              required
            /> */}
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
    </Formik>
  );
}

export default OpenAcc;
