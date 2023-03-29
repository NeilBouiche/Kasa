import LogoWhite from "../assets/logo-white.png";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <LogoFooter src={LogoWhite} alt="Logo Kasa" />
      <Copyright>© 2020 Kasa. All rights reserved</Copyright>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 20rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoFooter = styled.img`
  margin: auto;
  width: 12rem;
`;

const Copyright = styled.p`
  font-size: 1.9rem;
  color: white;
  margin-bottom: 2.4rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default Footer;
