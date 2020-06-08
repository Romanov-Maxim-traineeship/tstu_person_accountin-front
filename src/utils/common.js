import { Toast, Snackbar } from "svelma";

export const pushToast = (type, message) => {
  Toast.create({ message, type: `is-${type}`, position: "is-top-right" });
};

export const pushSnackbar = ({ type, message, ...rest }) => {
  Snackbar.create({ type: `is-${type}`, position: "is-top-right", message, duration: 10000, ...rest });
};
