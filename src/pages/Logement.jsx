import { useParams, Navigate } from "react-router-dom";
import data from "../datas/logements.json";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Info from "../components/Info";

function Logement() {
  const params = useParams();
  const logement = data.find((item) => item.id === params.id);
  if (!logement) {
    return <Navigate to="/404" />;
  }
  const slides = logement.pictures;
  return (
    <div>
      <Carousel slides={slides} />
      <div className="infos">
        <Info data={logement} />
        <Rating data={logement} />
      </div>
      <div className="logement-collapse-container">
        <Collapse titre={"Description"}>
          <p className="collapse_para">{logement.description}</p>
        </Collapse>
        <Collapse titre={"Equipements"}>
          <div className="collapse_para">
            <ul>
              {logement.equipments.map((equipment, key) => (
                <li className="logement-equipment" key={key}>
                  {equipment}
                </li>
              ))}
            </ul>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
export default Logement;