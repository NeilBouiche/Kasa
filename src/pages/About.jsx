import bannerAbout from "../assets/banner-about.png";
import Collapse from "../components/Collapse";

export default function About() {
  return (
    <div>
      <div className="about_banner_container">
        <img
          className="about_banner_image"
          src={bannerAbout}
          alt="Bannière page à propos"
        />{" "}
      </div>
      <div className="collapse_container">
        <Collapse titre="Fiabilité">
          <p className="collapse_para">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse titre="Respect">
          <p className="collapse_para">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse titre="Service">
          <p className="collapse_para">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapse>
        <Collapse titre="Sécurité">
          <p className="collapse_para">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </div>
  );
}
