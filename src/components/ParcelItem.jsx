import "../styles/component/parcelitem.css";
import { BiArrowBack, BiPackage } from "react-icons/bi";
import { Link } from "react-router-dom";


export default function ParcelItem({ ItemDetail }) {

    const { parcel_id, location_name,sender, user_name, eta, verification_required,notes } = ItemDetail;
    const [date] = eta.split("T");

    return (
        <div className="item-page">
            <Link className="back-page" to={"/"}>
                <BiArrowBack className="BiIcons" id="BackArrow" />
                <span>Go Back</span>
            </Link>
                <div className="outer-box">
                    <div className="top-section">
                        <BiPackage className="BiIcons" id="ParcelBox" />
                        <div className="span-group">
                            <span>Parcel_id : {parcel_id}</span>
                            <span>Sender : {sender}</span>
                        </div>
                    </div>
                    <div className="inner-box">
                        <div className="detail">
                        <span> From : {location_name}</span>
                        <span> User_name : {user_name}</span>
                        <span> ETA : {date}</span>
                        <span> Verification_required : {verification_required ? "yes" : "No"}</span>
                        <span> Notes: {notes === null ? "No notes provided" : `${notes}`}</span>
                        </div>
                    </div>
                </div>
        </div >
    )
}