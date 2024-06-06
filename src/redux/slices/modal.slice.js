import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalType: null,
  modalProps: {},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (prevState, action) => {
      const { modalType, modalProps } = action.payload;
      prevState.isOpen = true;
      prevState.modalType = modalType;
      prevState.modalProps = modalProps;
    },
    closeModal: (prevState) => {
      prevState.isOpen = false;
      prevState.modalType = null;
      prevState.modalProps = {};
    },
  },
});

export const selectedModal = (state) => state.modal;
export const modalReducer = modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
