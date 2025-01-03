export default function applyDayNightTheme() {
  const time = new Date().getHours();

  if (time < 16) {
    document.body.style.background =
      "linear-gradient(to bottom, #87CEEB, #B0E0E6)";
    document.documentElement.style.setProperty("--text-color", "#2F4F4F");
  } else if (time < 19) {
    document.body.style.background =
      "linear-gradient(to bottom, #a8e6cf, #dcedc1, #ffd180)";
    document.documentElement.style.setProperty("--text-color", "#2F4F4F");
  } else {
    document.body.style.background =
      "linear-gradient(to bottom, #2C3E50, #34495E, #1A252F)";
    document.documentElement.style.setProperty("--text-color", "#ECF0F1");
  }
}
