import "../styles/webpages/parceldetails.css";
import ParcelItem from "../components/ParcelItem";
import {useParams,Link} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import ParcelStatus from "../components/ParcelStatus";
import LocationMap from "../components/LocationMap";
import { useTranslation } from 'react-i18next';


export default function ParcelDetails({ParcelData}) {
    const { t } = useTranslation();
    const {id} = useParams();
    const ItemData = ParcelData.find((recs) => Number(recs.parcel_id) === Number(id));

    return (
        <div className="parcel-detail-page">
            <h1 className="heading">{t('your_packages')}</h1>
                <ParcelItem ItemDetail={ItemData}/>
            <h2 className="heading"> {t('tracking_status')}</h2>
                <ParcelStatus ItemDetail={ItemData}/>
            <h3 className="heading"> {t('location')} </h3>
                <LocationMap ItemDetail={ItemData}/>
            <Link className="back-page" to={"/"}>
                <BiArrowBack className="BiIcons" id="BackArrow" />
                <span>{t('go_back')}</span>
            </Link>
        </div>
    );
}