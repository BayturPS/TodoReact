import React from "react";
import styled from "styled-components";
import ReactDom from "react-dom";
const ModalDelete = ({ onClose, children }) => {
  return ReactDom.createPortal(
    <>
      <OVERLAY_STYLES>
        <MODAL_STYLES>
          {children}
          <div>
            <button onClick={onClose}>no</button>
          </div>
        </MODAL_STYLES>
      </OVERLAY_STYLES>
    </>,
    document.getElementById("deleteModal")
  );
};
export default ModalDelete;
const OVERLAY_STYLES = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
const MODAL_STYLES = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  color: #000;
  padding: 50px;
  z-index: 1000;
  border-radius: 15px;
`;