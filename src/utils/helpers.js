
export const getLabelSize = (data, filterKey, label) => {
  const dataSize = data.length;
  const labelSize = data.filter((item) => item[filterKey] === label).length;
  const percentage = Math.round((labelSize / dataSize) * 100);
  return { labelSize, percentage };
};
