export default function applyDayNightTheme() {
  const time = new Date().getHours();

  if (time < 16) {
    document.body.style.background =
      "linear-gradient(to bottom, #0084ff, #009dff, #00d5ff)";
    document.documentElement.style.setProperty("--text-color", "#000");
  } else if (time < 19) {
    document.body.style.background =
      "linear-gradient(to bottom, #ff6a00, orange, #ffcc00)";
    document.documentElement.style.setProperty("--text-color", "#000");
  } else {
    document.body.style.background =
      "linear-gradient(to bottom, #001181, #003b89, #00658a)";
    document.documentElement.style.setProperty("--text-color", "#fafafa");
  }
}
