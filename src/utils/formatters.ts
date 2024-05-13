export const convertToUpperCase = (input: string): string => {
  return input.toUpperCase();
};

export const convertStringToLowerDash = (inputString: string): string => {
  return inputString.toLowerCase().replace(/\s+/g, '-');
};
