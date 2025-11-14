import React from "react";
import ReactDOM from "react-dom";

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ background: "#fff", padding: "20px", borderRadius: "10px" }}>
        {children}
        <button onClick={onClose} style={{ marginTop: "10px" }}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;

































































































