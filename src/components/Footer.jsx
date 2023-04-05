import LogoWhite from "../assets/logo-white.png";

export default function Footer() {
  return (
    <div className="footer_container">
      <img className="footer_logo" src={LogoWhite} alt="Logo Kasa" />
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
