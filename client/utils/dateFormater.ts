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

export { formatDayDateMonthYear, formatDateMonthYear, formatMonthDateYear };
