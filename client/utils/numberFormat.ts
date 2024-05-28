const formatCurrency = (
  amount: number,
  prefix: string,
  includeLastTwoDigits: boolean,
  includeSpace: boolean
): string => {
  let formattedAmount = "";

  if (includeLastTwoDigits) {
    const amountWithDecimals = (amount / 100).toFixed(2);
    const parts = amountWithDecimals.split(".");
    formattedAmount =
      parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "," + parts[1];
  } else {
    formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  if (includeSpace) {
    return `${prefix} ${formattedAmount}`;
  } else {
    return `${prefix}${formattedAmount}`;
  }
};

const formatIntegerToRegularNumber = (amount: number): string => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export { formatCurrency, formatIntegerToRegularNumber };
