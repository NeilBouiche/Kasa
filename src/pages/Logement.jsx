import { useParams } from "react-router-dom";
import "../datas/logements.json";

function Logement() {
  const params = useParams();
  console.log(params);
  return <div>Logement</div>;
}

export default Logement;
