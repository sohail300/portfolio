export function getStatusBackgroundColor(status:string) {
  switch (status) {
    case "Under Development":
      return "rgba(101, 55, 103, .262)";
    case "SIH Project":
      return "rgba(55, 103, 81, .262)";
    case "Deployed":
      return "rgba(87, 103, 55, .262)";
    default:
      return "rgba(62, 55, 103, .262)";
  }
}

export function getStatusTextColor(status:string) {
  switch (status) {
    case "Under Development":
      return "#de83ff";
    case "SIH Project":
      return "#83ffb1";
    case "Deployed":
      return "#dcff83";
    default:
      return "#8394ff";
  }
}
