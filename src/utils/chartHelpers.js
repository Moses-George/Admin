export const getLabelSize = (data, filterKey, label) => {
  const dataSize = data.length;
  const labelSize = data.filter((item) => item[filterKey] === label).length;
  const percentage = Math.round((labelSize / dataSize) * 100);
  return { labelSize, percentage };
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

const formatNumber = (number) => {
  if (+number < 1000) {
    return number;
  }
  if (+number >= 1000) {
    const formattedNumber = number / 1000;
    return `${formattedNumber}k`;
  }
};

export const months = [
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

export const getValidYears = () => {
  const validYears = [];
  const currentYear = new Date().getFullYear();

  for (let i = 2023; i <= currentYear; i++) {
    validYears.push(i);
  }

  return validYears;
};

export const getTotalSubscriptionAmount = (subscriptions, selectedYear) => {
  const totalSubscriptionAmount = formatNumber(
    subscriptions?.reduce((accumulator, current) => +accumulator + Number(current?.amount), 0)
  );

  const selectedYearData = subscriptions?.filter(
    (item) => new Date(item?.subscribed_at).getFullYear() === selectedYear
  );

  const selectedYearTotalAmount = formatNumber(
    selectedYearData?.reduce((accumulator, current) => +accumulator + Number(current?.amount), 0)
  );

  const EachMonthTotalAmount = months.map((month) =>
    formatNumber(
      selectedYearData
        ?.filter((data) => {
          const currentMonth = new Date(data?.subscribed_at).getMonth();
          return months[currentMonth] === month;
        })
        .reduce((accumulator, current) => +accumulator + +current?.amount, 0)
    )
  );

  return { totalSubscriptionAmount, selectedYearTotalAmount, EachMonthTotalAmount };
};

export const accountCreatedDate = (data, selectedYear) => {
  const totalAccounts = formatNumber(data?.length);

  const selectedYearData = data?.filter(
    (item) => new Date(item?.created_at).getFullYear() === selectedYear
  );

  const selectedYearTotal = formatNumber(selectedYearData?.length);

  const EachMonthTotal = months.map((month) =>
    formatNumber(
      selectedYearData?.filter((member) => {
        const monthCreated = new Date(member?.created_at).getMonth();
        return months[monthCreated] === month;
      })?.length
    )
  );

  return { totalAccounts, selectedYearTotal, EachMonthTotal };
};
