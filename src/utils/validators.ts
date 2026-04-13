/* eslint-disable @typescript-eslint/no-explicit-any */
export const ERROR_CODES_400S: any = {
  ERR_GENERAL_AUTH_FAILURE: 'ERR_GENERAL_AUTH_FAILURE',
};

export const mapFieldErrors = function (errors: any) {
  const err: any = {};
  Object.keys(errors).forEach((key) => {
    const code = errors[key][0] || '';
    const splitted = code.split(':');
    Object.keys(ERROR_CODES_400S).every((item) => {
      if (splitted[0] === item) {
        err[key] = `error:${ERROR_CODES_400S[item].toLocaleLowerCase()}`;
        return false;
      }
      return true;
    });
  });
  return err;
};

export const mapGeneralErrors = function (error: any, defaultMessage: any) {
  let err = defaultMessage;
  Object.keys(ERROR_CODES_400S).every((code) => {
    if (error === code) {
      err = `error:${ERROR_CODES_400S[code].toLocaleLowerCase()}`;
      return false;
    }
    return true;
  });
  return err;
};
