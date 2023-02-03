import "../styles/component/parcelitem.css";
import {BiPackage} from "react-icons/bi";
import {useTranslation} from 'react-i18next';


export default function ParcelItem({ItemDetail}) {

    const {parcel_id, location_name, sender, last_updated, eta, verification_required, notes} = ItemDetail;
    const [date] = eta.split("T");
    const [lastUpdated] = last_updated.split("T");
    const {t} = useTranslation();

    function str() {
        if (verification_required) return t('yes')
        else return t('no')
    }

    return (
        <div className="item-page">
            <div className="outer-box">
                <div className="top-section">
                    <BiPackage className="BiIcons" id="ParcelBox"/>
                    <div className="span-group">
                        <span> {t('parcel_id')} : {parcel_id}</span>
                        <span>Sender : {sender}</span>
                    </div>
                </div>
                <div className="inner-box">
                    <div className="detail">
                        <span> {t('from')} : {location_name}</span>
                        <span>  {t('verification_required')} : {str()}</span>
                        <span> ETA : {date}</span>
                        <span> {t('notes')}: {notes === null ? "No notes provided" : `${notes}`}</span>
                        <span> {t('last_updated')} : {lastUpdated}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}