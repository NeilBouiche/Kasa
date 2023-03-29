import styled from "styled-components";

export default function Gallery({ data }) {
  return (
    <GalleryContainer>
      {data.slice(0, 6).map((data) => {
        return (
          <CardContainer key={data.id}>
            <CardImg src={data.cover} alt="Présentation du logement" />
            <CardTitle>{data.title}</CardTitle>
          </CardContainer>
        );
      })}
    </GalleryContainer>
  );
}

const GalleryContainer = styled.div`
  margin: 0 10rem 10rem 10rem;
  padding: 5rem 5rem 0 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #f6f6f6;
  border-radius: 1.5rem;
  @media (max-width: 768px) {
    margin: 4rem 2rem 4rem 2rem;
    padding: 0;
    background: white;
    display: block;
  }
`;

const CardContainer = styled.div`
  width:100%
  height: 34rem;
  margin-bottom: 5rem;
  position: relative;
  border-radius: 1.5rem;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 60%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
  &:hover {
    transform: scale(1.05);
    transition: ease-out 0.3s;
  }
  @media (max-width: 768px) {
    height: 25.5rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
    &::after {
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 60%,
          rgba(0, 0, 0, 0.7) 100%
        );
      }
    &:hover {
        transform: scale(1.02);
        transition: ease-out 0.3s;
      }
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`;

const CardTitle = styled.p`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: white;
  font-size: 1.8rem;
  z-index: 2;
`;
