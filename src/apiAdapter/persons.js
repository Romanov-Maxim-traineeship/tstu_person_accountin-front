import { equals } from "ramda";
import axios from "utils/axios";
import { downloadFile } from "utils/common";

import { PERSONS_URL, PERSON_URL, getPath } from "constants/routes";

export const getPersons = () => {
  return axios.get(PERSONS_URL).then(({ data }) => data);
};

export const getPerson = (personId) => {
  return axios.get(getPath(PERSON_URL, { personId })).then(({ data }) => data);
};

export const deletePerson = (personId) => {
  return axios.delete(getPath(PERSON_URL, { personId })).then(({ data }) => data);
};

export const createPerson = (d) => {
  return axios.post(PERSONS_URL, d).then(({ data }) => data);
};

export const updatePerson = (personId, d) => {
  return axios.patch(getPath(PERSON_URL, { personId }), d).then(({ data }) => data);
};

export function getExport(type) {
  const method = "GET";
  const url = `persons/${type}`;

  function getExtByType(typeOfFile) {
    if (equals("pdf", typeOfFile)) return "application/pdf";
    if (equals("csv", typeOfFile)) return "text/csv";
    if (equals("excel", typeOfFile))
      return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    return typeOfFile;
  }

  let fileName = `testFile`;

  return axios
    .request({
      url,
      method,
      responseType: "blob",
    })
    .then(({ data }) => downloadFile(data, getExtByType(type), fileName));
}
