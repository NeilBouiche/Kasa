import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header_container">
      <img className="logo_header" src={Logo} alt="Logo Kasa" />
      <div>
        <Link className="header_link" to="/">
          Accueil
        </Link>
        <Link className="header_link" to="/about">
          A Propos
        </Link>
      </div>
    </div>
  );
}
