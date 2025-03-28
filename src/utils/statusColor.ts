export function getStatusBackgroundColor(status: string) {
  switch (status) {
    case "Under Development":
      return "rgba(101, 55, 103, .262)";
    case "SIH Project":
      return "rgba(55, 103, 81, .262)";
    case "Deployed":
      return "rgba(87, 103, 55, .262)";
    case "Full Stack":
      return "rgba(131, 255, 131, 0.2)"; // Light green tint
    case "Frontend":
      return "rgba(111, 163, 239, 0.2)"; // Light blue tint
    case "Backend":
      return "rgba(255, 179, 71, 0.2)"; // Light orange tint
    default:
      return "rgba(62, 55, 103, .262)";
  }
}

export function getStatusTextColor(status: string) {
  switch (status) {
    case "Under Development":
      return "#de83ff";
    case "SIH Project":
      return "#83ffb1";
    case "Deployed":
      return "#dcff83";
    case "Full Stack":
      return "#83ff83"; // Green for stability and performance
    case "Frontend":
      return "#6fa3ef"; // Soft blue for UI/UX emphasis
    case "Backend":
      return "#ffb347"; // Warm orange for versatility
    default:
      return "#8394ff";
  }
}
