import "../styles/component/parcelstatus.css";
import statusCheck from "../utils/statusCheck";
import { useTranslation } from "react-i18next";


export default function ParcelStatus({ItemDetail}) {
    const {status} = ItemDetail;
    const { t } = useTranslation();

    return (
        <div className="parcel-status">
            <div className={statusCheck({status},1)}>
                <span>{t('order_info_received')}</span>
            </div>
            <div className={statusCheck({status},2)}>
                <span>{t('ready_for_pickup')}</span>
            </div>
            <div className={statusCheck({status},3)}>
                <span>{t('on_the_way')}</span>
            </div>
            <div className={statusCheck({status},4)}>
                <span>{t('delivered')}</span>
            </div>
        </div>
    );
}