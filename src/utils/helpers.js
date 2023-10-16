
export const getLabelSize = (data, filterKey, label) => {
  const dataSize = data.length;
  const labelSize = data.filter((item) => item[filterKey] === label).length;
  const percentage = Math.round((labelSize / dataSize) * 100);
  return { labelSize, percentage };
};

// const getProgressbarData = () => {
//     const colorsCode = ['#84cc16', '#fbbf24', '#d97706'];
//     const colors = ['bg-lime-500', 'bg-amber-400', 'bg-amber-600'];

//     const labels = Array.from(new Set(chartData.map((data) => data['category'])));

//     const progressBarData = labels.map((label, index) => {
//       const { labelSize, percentage } = getLabelSize(chartData, 'category', label);
//       return {
//         id: Math.random(),
//         label: label,
//         percentage: percentage,
//         labelSize: labelSize,
//         bgColor: colors[index]
//       };
//     });
// }
