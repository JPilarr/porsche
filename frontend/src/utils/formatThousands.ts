export const formatThousands = (val: string | number | undefined) => {
  if (!val) {
    return "0";
  }

  const addCommas = (num: string | number | undefined) =>
    num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeNonNumeric = (num: string | number | undefined) =>
    num?.toString().replace(/[^0-9.]/g, "");

  return addCommas(removeNonNumeric(val));
};

export const formatThousandsToNumber = (val: string | number) => {
  return Number(
    val
      .toString()
      .replace(",", "")
      .replace(/[^0-9.]/g, "")
  );
};
