import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby';
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background: var(--dark-blue);
  overflow: hidden;
  position: relative;
`;

const SuccessText = styled.h1`
    color: var(--white);
`;
const RedirectButton = styled.button`
    height: 3rem;

`;
const ContactSuccess = () => {
  return (
    <ContactWrapper>
        <SuccessText>
            Thanks for submitting the form!
        </SuccessText>
        <Link to = '/'><RedirectButton>Take me back!</RedirectButton></Link>
    </ContactWrapper>
  );
};

export default ContactSuccess;
