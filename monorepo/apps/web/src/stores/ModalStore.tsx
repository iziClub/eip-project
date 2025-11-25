import { create } from "zustand";
import { ReactNode } from "react";

export type ModalOptions = {
  title: string;
  content: ReactNode;
  onSave?: () => void;
  onCancel?: () => void;
};

type ModalState = {
  isOpen: boolean;
  title: string;
  content: ReactNode | null;
  onSave?: (() => void) | undefined;
  onCancel?: (() => void) | undefined;

  openModal: (options: ModalOptions) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  title: "",
  onSave: undefined,
  onCancel: undefined,

  openModal: ({ title, content, onSave, onCancel }) =>
    set({
      isOpen: true,
      title,
      content,
      onSave,
      onCancel,
    }),

  closeModal: () =>
    set({
      isOpen: false,
      content: null,
      title: "",
      onSave: undefined,
      onCancel: undefined,
    }),
}));
