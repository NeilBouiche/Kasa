import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error_container">
      <span className="four_o_four">404</span>
      <p className="error_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error_link" to={"/"}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
