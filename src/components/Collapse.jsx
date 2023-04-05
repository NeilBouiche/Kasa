import { useState } from "react";
import Arrow from "../assets/arrow.png";

export default function Collapse({ titre, children }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse">
      <div className="collapse_title_container">
        <h2 className="collapse_title">{titre}</h2>
        <button
          className={`collapse_button ${open ? "rotate" : ""}`}
          onClick={toggle}
        >
          <img src={Arrow} alt="Arrow icon" />
        </button>
      </div>
      {open && (
        <div className="collapse_para_container">
          <div className="collapse_para">{children}</div>
        </div>
      )}
    </div>
  );
}
