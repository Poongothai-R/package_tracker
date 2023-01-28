import "../styles/component/parcelstatus.css";

export default function ParcelStatus({ItemDetail}) {

    const {status} = ItemDetail;
    let seq_no;
    if (status === "order-info-received") seq_no = 1
    else if (status === "ready-for-pickup") seq_no = 2
    else if (status === "on-the-way") seq_no = 3
    else seq_no = 4;

    function isComplete(seq_id) {
        if (seq_id < seq_no) return "completed"
        else if (seq_id === seq_no) return "active"
        else if (seq_id > seq_no) return "not-active"
    }

    return (<div className="parcel-status">
            <div className={isComplete(1)}>
                <span>Order-info-received</span>
            </div>
            <div className={isComplete(2)}>
                <span>Ready-for-Pickup</span>
            </div>
            <div className={isComplete(3)}>
                <span>On-the-way</span>
            </div>
            <div className={isComplete(4)}>
                <span>Delivered</span>
            </div>
        </div>);

}