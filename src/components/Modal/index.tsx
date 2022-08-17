import { X } from "phosphor-react";
import React, { forwardRef } from "react";
import { useEffect, useState } from "react";
import { ModalContainer, ModalContent } from "./styles";

interface ModalProps {
  displayImage?: string;
  showModal: boolean;
  onCloseModal: () => void;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({ ...props }, ref) => {
  if (!props.showModal) return null;

  return (
    <ModalContainer ref={ref} className="modal">
      <ModalContent>
        <X size={32} onClick={props.onCloseModal} />
        <img src={props.displayImage} alt="" />
      </ModalContent>
    </ModalContainer>
  )
})