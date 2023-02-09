import "../styles/component/parcelstatus.css";
import statusCheck from "../utils/statusCheck";
import { useTranslation } from "react-i18next";

export default function ParcelStatus({ ItemDetail }) {
  const { status } = ItemDetail;
  const { t } = useTranslation();

  return (
    // DRY this can clearly be done dynamically using a map function
    <div className="parcel-status">
      <ItemHighlight text={t("info_received")} status={status} level={1} />
      <ItemHighlight text={t("ready_for_pickup")} status={status} level={2} />
      <ItemHighlight text={t("on_the_way")} status={status} level={3} />
      <ItemHighlight text={t("delivered")} status={status} level={4} />
    </div>
  );
}
