import bannerImage from "../assets/bannerBackground.png";

export default function Banner() {
  return (
    <div className="banner_container">
      <img className="banner_image" src={bannerImage} alt="" />
      <h1 className="banner_title">
        <div>Chez vous, </div>partout et ailleurs
      </h1>
    </div>
  );
}
