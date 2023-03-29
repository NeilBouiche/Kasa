import styled from "styled-components";
import bannerImage from "../assets/bannerBackground.png";

export default function Banner() {
  return (
    <BannerContainer>
      <BannerImage src={bannerImage} alt="" />
      <BannerTitle>
        <div>Chez vous, </div>partout et ailleurs
      </BannerTitle>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  margin: 6.3rem 10rem 4.3rem 10rem;
  height: 22.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    margin: 2rem;
    height: 11.1rem;
    justify-content: start;
  }
`;

const BannerImage = styled.img`
  border-radius: 1rem;
  filter: brightness(70%);
  width: 100%;
  height: 100%;
`;

const BannerTitle = styled.h1`
  position: absolute;
  font-size: 4.8rem;
  font-weight: 500;
  color: white;
  display: flex;
  gap: 1.5rem;
  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-left: 1.6rem;
    display: block;
  }
`;
