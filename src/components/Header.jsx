import Logo from "../assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <LogoHeader src={Logo} alt="Logo Kasa" />
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  margin: 4rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 2rem;
  }
`;

const LogoHeader = styled.img`
  width: 21rem;
  @media (max-width: 768px) {
    width: 14.5rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: 2.4rem;
  font-weight: 500;
  color: #ff6060;
  &:last-child {
    margin-left: 5.7rem;
  }
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-transform: uppercase;
    &:last-child {
      margin-left: 2rem;
    }
  }
`;

export default Header;
