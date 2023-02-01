import "../styles/component/parcelitem.css";
import { BiPackage } from "react-icons/bi";
import { Link } from "react-router-dom";


export default function ParcelItem({ ItemDetail }) {

    const { parcel_id, location_name,sender, last_updated, eta, verification_required,notes } = ItemDetail;
    const [date] = eta.split("T");
    const [lastUpdated] = last_updated.split("T");

    return (
        <div className="item-page">
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
                        <span> Verification Required : {verification_required ? "yes" : "No"}</span>
                        <span> ETA : {date}</span>
                        <span> Notes: {notes === null ? "No notes provided" : `${notes}`}</span>
                        <span> Last Updated : {lastUpdated}</span>
                        </div>
                    </div>
                </div>
        </div >
    )
}