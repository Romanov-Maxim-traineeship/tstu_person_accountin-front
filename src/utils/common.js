import { Toast, Snackbar } from "svelma";

export const pushToast = (type, message) => {
  Toast.create({ message, type: `is-${type}`, position: "is-top-right" });
};

export const pushSnackbar = ({ type, message, ...rest }) => {
  Snackbar.create({ type: `is-${type}`, position: "is-top-right", message, duration: 10000, ...rest });
};

export const downloadFile = (blobData, type, name) => {
  const downloadUrl = window.URL.createObjectURL(new Blob([blobData], { type }));
  const DownloadLink = document.createElement("a");
  DownloadLink.href = downloadUrl;
  DownloadLink.setAttribute("download", name);
  document.body.appendChild(DownloadLink);
  DownloadLink.click();
  DownloadLink.remove();
};
