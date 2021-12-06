export const formatPhoneAsNumber = (phoneNumberInput: string | number) => {
  if (phoneNumberInput) {
    if (typeof phoneNumberInput === "string") {
      const numbersOnly = phoneNumberInput.replace(/\D/g, "");
      const removePrefix = numbersOnly.substring(
        numbersOnly.length - 10,
        numbersOnly.length
      );

      return removePrefix;
    } else {
      return phoneNumberInput.toString();
    }
  } else {
    return "";
  }
};

export const formatPhoneNumber = (
  phoneNumberInput: string | null | undefined
) => {
  if (
    phoneNumberInput !== undefined &&
    phoneNumberInput !== null &&
    phoneNumberInput !== ""
  ) {
    const formattedInput = formatPhoneAsNumber(phoneNumberInput).toString();

    return `+1 (${formattedInput.slice(0, 3)}) ${formattedInput.slice(
      3,
      6
    )}-${formattedInput.slice(6, 10)}`;
  }

  if (phoneNumberInput === undefined || phoneNumberInput === null) {
    return "";
  }

  return phoneNumberInput;
};
