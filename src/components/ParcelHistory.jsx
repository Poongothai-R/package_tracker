import "../styles/component/parcelhistory.css";
import ParcelCard from "./ParcelCard";
import { useTranslation } from "react-i18next";

// good
export default function ParcelHistory({ data }) {
  const { t } = useTranslation();
  const parcelItem = data.map((recs) => (
    <ParcelCard key={recs.id} cardData={recs} />
  ));

  return (
    <div className="track-history">
      <h1>{t("your_packages")}..</h1>
      <div className="parcel-list">{parcelItem}</div>
    </div>
  );
}
