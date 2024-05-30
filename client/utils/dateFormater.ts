const formatDayDateMonthYear = (date: Date): string => {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dayName = days[date.getDay()];
  const dateNumber = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName}, ${dateNumber} ${monthName} ${year}`;
};

const formatDateMonthYear = (date: Date): string => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dateNumber = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dateNumber} ${monthName} ${year}`;
};

const formatMonthDateYear = (date: Date): string => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dateNumber = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  return `${monthName} ${dateNumber}, ${year}`;
};

const calculateTimeRange = (
  startTime: string,
  workingHours: number
): string => {
  const [time, modifier] = startTime.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  } else if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  let endHours = hours + workingHours;
  let endModifier = "AM";

  if (endHours >= 24) {
    endHours -= 24;
  }

  if (endHours >= 12) {
    endModifier = "PM";
    if (endHours > 12) {
      endHours -= 12;
    }
  } else if (endHours === 0) {
    endHours = 12;
  }

  const startHoursFormatted = hours % 12 === 0 ? 12 : hours % 12;
  const startModifier = hours >= 12 ? "PM" : "AM";

  return `${startHoursFormatted}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${startModifier} - ${endHours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${endModifier}`;
};

export {
  formatDayDateMonthYear,
  formatDateMonthYear,
  formatMonthDateYear,
  calculateTimeRange,
};
