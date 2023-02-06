import "../styles/component/trackpackage.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function TrackPackage({ data }) {
  const { t } = useTranslation();
  const ParcelNo = useRef("");
  const [parcel_id, setParcelId] = useState(0);

  const matchData = data.find(
    (recs) => Number(recs.parcel_id) === Number(parcel_id)
  );

  return (
    <div className="track-box">
      <span> {t("track_your_package")} </span>
      <input
        type="number"
        placeholder={t("enter_parcel_id")}
        id="parcelNo-input"
        onChange={(e) => setParcelId(e.target.value)}
        ref={ParcelNo}
      ></input>
      {matchData ? (
        <Link id="track-now-btn" to={`/parcel/${parcel_id}`}>
          {t("track_now")}
        </Link>
      ) : (
        <Link id="track-now-btn" to={`/`} onClick={() => alert(t("alert"))}>
          {t("track_now")}
        </Link>
      )}
    </div>
  );
}
