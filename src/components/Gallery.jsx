export default function Gallery({ data }) {
  return (
    <div className="gallery_container">
      {data.slice(0, 6).map((data) => {
        return (
          <div className="card_container" key={data.id}>
            <img
              className="card_image"
              src={data.cover}
              alt="Présentation du logement"
            />
            <p className="card_title">{data.title}</p>
          </div>
        );
      })}
    </div>
  );
}
