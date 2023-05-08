import { Link } from "react-router-dom";

export default function Gallery({ data }) {
  return (
    <div className="gallery_container">
      {data.map((data, key) => {
        return (
          <Link key={key} to={`/logement/${data.id}`}>
            <div className="card_container">
              <img
                className="card_image"
                src={data.cover}
                alt="Présentation du logement"
              />
              <p className="card_title">{data.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
