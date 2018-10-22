import React from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  font-size: 1.6rem;
`;
const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-blue);
  height: auto;
  padding: 0 1rem;
  font-size: 1.5rem;
  width: 8rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const TextBox = styled.input.attrs({
  type: "text"
})`
  width: 100%;
  border-radius: 10px;
  border-top-left-radius: 0;
  height: 3rem;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const ContentArea = styled.textarea`
  width: 100%;
  border-radius: 10px;
  border-top-left-radius: 0;
  height: 20rem;
  padding: 0 1rem;
  margin-bottom: 2rem;
`;
const SubmitBtn = styled.button`
  width: 100%;
  height: 4rem;
  background: var(--dark-blue);
  color: var(--white);
  border: var(--dark-blue);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    border: 3px solid var(--light-blue);
  }
  &:active {
    background: var(--darker-blue);
  }
`;
class Form extends React.Component {
  state = {
    subject: "",
    content: ""
  };
  render() {
    return (
      <FormWrapper name = "contact" method = "POST" action="contact-success" netlify>
        <FieldGroup>
          <Label htmlFor="subject">Subject</Label>
          <TextBox id="subject" placeholder="Add Subject" />
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="content">Content</Label>
          <ContentArea id="content"placeholder="Add Content"></ContentArea>
        </FieldGroup>
        <div data-netlify-recaptcha></div>
        <SubmitBtn>Submit</SubmitBtn>
      </FormWrapper>
    );
  }
}

export default Form;
