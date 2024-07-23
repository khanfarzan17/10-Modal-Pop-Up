import React from "react";
import "./style.css";
export default function Popup({ id, header, body, footer }) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close-modal-icon">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>

        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p> This is our modal Body</p>
            </div>
          )}
        </div>

        <div className="footer">{footer ? footer : <h2>footer</h2>}</div>
      </div>
    </div>
  );
}
