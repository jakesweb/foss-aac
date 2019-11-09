import styled from "styled-components";

const Form = styled.form`
  width: 80%;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.2);
  border: 5px solid white;
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 500;
  label: {
    display: block;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  input,
  textarea,
  select {
    display: block;
    width: 75%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: lightpink;
    }
  }
  button,
  input[type="submit"] {
    width: auto;
    background: black;
    color: lightpink;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    margin: 0.5rem 5rem;
  }
  fieldset {
    border: 0;
    padding: 0;
    margin-left: 3.5rem;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: "";
      display: block;
    }
  }
`;

export default Form;
