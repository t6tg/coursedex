import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Box({ title, icon, link }) {
  return (
    <div>
      <Link to={`/category/${link}`}>
        <div className="categories-box">
          <div class="sub-categories-box">
            <img src={icon} alt={icon} className="icon-categories" />
            <br />
            <br />
            <b>
              <h3 style={{ color: "#f16f24" }}>{title}</h3>
            </b>
          </div>
        </div>
      </Link>
    </div>
  );
}
