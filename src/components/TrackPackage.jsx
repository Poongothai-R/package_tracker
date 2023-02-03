import "../styles/component/trackpackage.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function TrackPackage() {
    const { t } = useTranslation();
    const ParcelNo = useRef("");
    const [parcel_id, setParcelId] = useState(0);

    return (
            <div className="track-box">
                <span> {t('track_your_package')} </span>
                <input type="number" placeholder={t('enter_parcel_id')} id="parcelNo-input"
                     onChange={(e)=>setParcelId(e.target.value)} ref={ParcelNo} ></input>
                <Link id="track-now-btn" to={`/parcel/${parcel_id}`}>{t('track_now')}</Link>
            </div>
    );
}