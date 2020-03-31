//Taken from: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript?rq=1
export function numberWithCommas(x) {
  const parts = x.toString().split(".");
  return (
    parts[0].replace(/\B(?=(\d{3})+(?=$))/g, ",") +
    (parts[1] ? "." + parts[1] : "")
  );
}
