import "../styles/component/parcelcard.css";
import { BiPackage, BiSend } from "react-icons/bi";
import { Link } from "react-router-dom";


export default function ParcelCard({ cardData }) {

    const { parcel_id, sender } = cardData;

    return (
        <Link className="parcel-item" to={`/parcel/${parcel_id}`}>
            <BiPackage className="BiIcons" id="BiPackage" />
            <div className="parcel-info">
                <span>#{parcel_id}</span>
                <span>{sender}</span>
            </div>
            <BiSend className="BiIcons" id="BiSend" />
        </Link>
    )
}