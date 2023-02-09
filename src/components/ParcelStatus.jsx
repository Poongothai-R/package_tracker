import "../styles/component/parcelstatus.css";
import { useTranslation } from "react-i18next";

export default function ParcelStatus({ ItemDetail }) {
  const { status } = ItemDetail;
  const { t } = useTranslation();

  return (
    <div className="parcel-status">
      <ItemHighlight level={1} status={status} text={t("info_received")} />
      <ItemHighlight level={2} status={status} text={t("ready_for_pickup")} />
      <ItemHighlight level={3} status={status} text={t("on_the_way")} />
      <ItemHighlight level={4} status={status} text={t("delivered")} />
    </div>
  );
}
