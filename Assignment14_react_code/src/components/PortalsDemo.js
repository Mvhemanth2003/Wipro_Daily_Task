import React, { useState } from "react";
import Modal from "./Modal";

export default function PortalsDemo() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h2>React Portals Demo</h2>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h3>This modal is rendered outside the DOM hierarchy!</h3>
        </Modal>
      )}
    </div>
  );
}













































































































