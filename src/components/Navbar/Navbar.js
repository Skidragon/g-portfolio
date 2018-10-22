import React from "react";
import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";

const NavbarWrapper = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 69px;
  background: var(--dark-blue);
  padding: 0 1.6rem;
  z-index: 1000;
`;
const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  line-height: 150%;
`;
const Name = styled.div`
  font-size: 1.2rem;
  font-family: "Rochester";
`;

const Title = styled.div`
  font-size: 1rem;
  margin-left: 1.1rem;
  font-family: "Rochester";
`;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }
  activeHandler = () => {
      this.setState({
          isActive: !this.state.isActive,
      });
  }
  render() {
    const { isActive } = this.state;
    return (
      <NavbarWrapper>
        <PersonInfo>
          <Name>Simon Davis</Name>
          <Title>Web Developer</Title>
        </PersonInfo>
        <HamburgerMenu isActive={isActive} activeHandler = {this.activeHandler} />
      </NavbarWrapper>
    );
  }
}

export default Navbar;
