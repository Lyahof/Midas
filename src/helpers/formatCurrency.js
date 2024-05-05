const formatCurrency = (value) =>
  new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0,
  maximumFractionDigits: 2,}).format(
    value
  );

export default formatCurrency;


