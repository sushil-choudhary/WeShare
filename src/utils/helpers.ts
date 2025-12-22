export const formatCurrency = (amount, locale = 'en-US', currencyCode = 'USD') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode, // e.g., 'USD', 'EUR', 'GBP', 'INR'
  }).format(amount);
};
