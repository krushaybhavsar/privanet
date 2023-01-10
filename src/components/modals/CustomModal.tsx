import React, { ReactElement, useEffect } from "react";
import { CloseIcon } from "../../assets/CloseIcon";
import "./css/CustomModal.css";

type CustomModalProps = {
  modalContent: JSX.Element;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  style?: React.CSSProperties;
};

const CustomModal = (
  props: CustomModalProps
): ReactElement<CustomModalProps> => {
  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [props.show]);

  return (
    <div
      className={"modal-background" + (props.show ? " active" : "")}
      onClick={() => {
        props.setShow(false);
      }}
    >
      <div
        className={"modal-content"}
        onClick={(e) => e.stopPropagation()}
        style={props.style ? props.style : {}}
      >
        <CloseIcon
          className="modal-close-icon"
          onClick={() => props.setShow(false)}
        />
        {props.modalContent}
      </div>
    </div>
  );
};

export default CustomModal;
