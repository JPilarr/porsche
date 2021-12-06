export const formatMileage = (mileage: string | number | undefined) => {
  if (!mileage) {
    return;
  }

  const addCommas = (num: string | number | undefined) =>
    num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeNonNumeric = (num: string | number | undefined) =>
    num?.toString().replace(/[^0-9]/g, "");

  return addCommas(removeNonNumeric(mileage));
};

export const formatMileageToNumber = (mileage: string | number) => {
  return Number(mileage.toString().replace(",", "").replace(/\D/, ""));
};
