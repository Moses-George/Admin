export const getLabelSize = (data, filterKey, label) => {
  const dataSize = data.length;
  const labelSize = data.filter((item) => item[filterKey] === label).length;
  const percentage = Math.round((labelSize / dataSize) * 100);
  return { labelSize, percentage };
};

export const isSuperAdmin = (admin) => {
  return admin.verified;
};

export const subscriptionStatus = (subscriptionDate) => {
  if (!subscriptionDate) {
    return 'Unsubscribed';
  }

  const subscriptionDuration = 30;
  const milliSecondsPerDay = 1000 * 60 * 60 * 24;

  const today = new Date();
  const start = new Date(subscriptionDate);

  const difference = today.getTime() - start.getTime();
  const daysRemaining = Math.ceil(
    (subscriptionDuration * milliSecondsPerDay - difference) / milliSecondsPerDay
  );

  if (+daysRemaining === 0) {
    return 'Expired';
  }

  if (+daysRemaining > 0) {
    return 'Subscribed';
  }
};

export const accountCreatedDate = (data, selectedYear) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const validYears = [];
  const currentYear = new Date().getFullYear();

  for (let i = 2023; i <= currentYear; i++) {
    validYears.push(i);
  }

  const selectedYearData = data?.filter(
    (item) => new Date(item?.created_at).getFullYear() === selectedYear
  );

  const EachMonthData = months.map(
    (month) =>
      selectedYearData?.filter((member) => {
        const monthCreated = new Date(member?.created_at).getMonth();
        return months[monthCreated] === month;
      })?.length
  );

  return { validYears, EachMonthData };
};

export const pluralizeWord = (item, word) => {
  if (+item === 1) {
    return `1${word}`;
  }
  if (+item > 1) {
    return `${item}${word}s`;
  }
};
