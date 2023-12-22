class TimeAndDateHanler {
  constructor() {}

  //  Formats date  e.g 27 may, 2003
  formatDate(date) {
    const newDate = new Date(date);
    return newDate.toLocaleString('en-UK', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  timeAgo(currentTime) {
    const date = currentTime instanceof Date ? currentTime : new Date(currentTime);

    const formatter = new Intl.RelativeTimeFormat('en');

    const ranges = {
      years: 3600 * 24 * 365,
      months: 3600 * 24 * 30,
      weeks: 3600 * 24 * 7,
      days: 3600 * 24,
      hours: 3600,
      minutes: 60,
      seconds: 1
    };

    const secondsElapsed = (date.getTime() - Date.now()) / 1000;

    for (let key in ranges) {
      if (ranges[key] < Math.abs(secondsElapsed)) {
        const delta = secondsElapsed / ranges[key];
        return formatter.format(Math.round(delta), key);
      }
    }
  }
}

export const modifiedDate = new TimeAndDateHanler();

export default TimeAndDateHanler;
