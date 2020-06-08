export const ROOT_URL = "/";
export const PERSONS_URL = "/persons";
export const PERSON_URL = "/persons/:personId";

export const getPath = (path, params) => {
  let result = path;
  Object.keys(params).forEach((key) => {
    result = result.replace(`:${key}`, params[key]);
  });
  return result;
};
