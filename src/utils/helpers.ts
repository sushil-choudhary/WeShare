/* eslint-disable @typescript-eslint/no-explicit-any */
import i18next from 'i18next';
import { isEmpty } from 'lodash';
import { MESSAGE_SEVERITIES } from './constant';
import { mapGeneralErrors } from './validators';

export const formatCurrency = (amount: any, locale = 'en-US', currencyCode = 'USD') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode, // e.g., 'USD', 'EUR', 'GBP', 'INR'
  }).format(amount);
};

export const trimmer = function (data: any) {
  if (!isEmpty(data)) {
    if (typeof data === 'object' && !Array.isArray(data)) {
      let trimedValues = {};
      Object.entries(data).forEach((value) => {
        if (typeof value[1] === 'string') {
          trimedValues = { ...trimedValues, [value[0]]: value[1].trim() };
        } else if (typeof value[1] === 'object') {
          const valueObj = trimmer(value[1]);
          trimedValues = { ...trimedValues, [value[0]]: valueObj };
        } else {
          trimedValues = { ...trimedValues, [value[0]]: value[1] };
        }
      });
      return trimedValues;
    } else if (typeof data === 'object' && Array.isArray(data)) {
      const trimedValues: any = [];
      data.forEach((arrayValue) => {
        if (typeof arrayValue === 'string') {
          trimedValues.push(arrayValue.trim());
        } else if (typeof arrayValue === 'object') {
          const valueObj = trimmer(arrayValue);
          trimedValues.push(valueObj);
        } else {
          trimedValues.push(arrayValue);
        }
      });
      return trimedValues;
    }
  } else {
    return data;
  }
};

export const showSuccessToast = (message: string, time?: number) => {
  ShowToast(i18next.t(`message:${message}`), MESSAGE_SEVERITIES.SUCCESS, time);
};

export const showErrorToast = (message: string, error?: any, time?: number) => {
  ShowToast(
    i18next.t(`${mapGeneralErrors(error, `error:${message}`)}`),
    MESSAGE_SEVERITIES.ERROR,
    time,
  );
};
