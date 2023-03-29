import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <ErrorContainer>
      <FourOFour>404</FourOFour>
      <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
      <ErrorLink to={"/"}>Retourner sur la page d'accueil</ErrorLink>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  width: 100%;
  height: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    height: 76rem;
  }
`;

const FourOFour = styled.span`
  font-size: 28.8rem;
  font-weight: 700;
  color: #ff6060;
  @media (max-width: 768px) {
    margin-top: 19rem;
    font-size: 10rem;
  }
`;

const ErrorText = styled.p`
  font-size: 3.6rem;
  color: #ff6060;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0 6rem 0 6rem;
    font-size: 1.8rem;
  }
`;

const ErrorLink = styled(Link)`
  font-size: 1.8rem;
  color: #ff6060;
  text-decoration: underline;
  margin-top: 18.2rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
