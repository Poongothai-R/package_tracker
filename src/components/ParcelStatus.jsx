import "../styles/component/parcelstatus.css";
import statusCheck from "../utils/statusCheck";

export default function ParcelStatus({ItemDetail}) {
    const {status} = ItemDetail;

    return (
        <div className="parcel-status">
            <div className={statusCheck({status},1)}>
                <span>Order-info-received</span>
            </div>
            <div className={statusCheck({status},2)}>
                <span>Ready-for-Pickup</span>
            </div>
            <div className={statusCheck({status},3)}>
                <span>On-the-way</span>
            </div>
            <div className={statusCheck({status},4)}>
                <span>Delivered</span>
            </div>
        </div>
    );
}