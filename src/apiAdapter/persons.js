import axios from "utils/axios";

import { PERSONS_URL, PERSON_URL, getPath } from "constants/routes";

export const getPersons = () => {
  return axios.get(PERSONS_URL).then(({ data }) => data);
};

export const getPerson = (personId) => {
  return axios.get(getPath(PERSON_URL, { personId })).then(({ data }) => data);
};
