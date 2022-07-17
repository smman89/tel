export const toCamelCase = (value: string): string => {
  return `${value[0].toLowerCase()}${value.slice(1)}`;
};
