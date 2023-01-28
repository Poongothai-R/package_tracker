import "../styles/component/parcelitem.css";
import { BiArrowBack, BiPackage } from "react-icons/bi";
import { Link } from "react-router-dom";


export default function ParcelItem({ ItemDetail }) {
    const { parcel_id, location_name,sender, user_name, eta } = ItemDetail;
    return (
        <div className="item-page">
            <Link className="back-page" to={"/"}>
                <BiArrowBack className="BiIcons" id="BackArrow" />
                <span>Go Back</span>
            </Link>
            <div className="detail-box">
                <div className="outer-box">
                    <div className="top-section">
                        <BiPackage className="BiIcons" id="ParcelBox" />
                        <div className="span-group">
                            <span>#{parcel_id}</span>
                            <span>{sender}</span>
                        </div>
                    </div>
                    <div className="inner-box">
                        <div className="detail">
                            <div className="from-detail">
                                <span> From </span>
                                <span> {location_name}</span>
                            </div>
                            <div className="to-detail">
                                <span> To </span>
                                <span> {user_name}</span>
                            </div>
                            <div className="eta-detail">
                                <span>ETA</span>
                                <span>{eta}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}