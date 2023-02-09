export default function ItemHighlight(text, status, level) {
  const allStatuses = ["order", "ready", "on-the-w", "delivered"];
  const currentStatus = allStatuses.find(status);
  const cssClass = "";
  // "" = white, "completed" = blue, "active" = yellow

  cssClass = currentStatus < level && "completed";
  cssClass = currentStatus === selevelq_no && "active";

  return (
    <li className={cssClass}>
      <span>{text}</span>
    </li>
  );
}
