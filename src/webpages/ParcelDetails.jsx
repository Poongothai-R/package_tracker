import "../styles/webpages/parceldetails.css";
import ParcelItem from "../components/ParcelItem";
import {useParams,Link} from "react-router-dom";
import { BiArrowBack, BiPackage } from "react-icons/bi";
import ParcelStatus from "../components/ParcelStatus";
import LocationMap from "../components/LocationMap";


export default function ParcelDetails({ParcelData}) {

    const {id} = useParams();
    const ItemData = ParcelData.find((recs) => Number(recs.parcel_id) === Number(id));

    return (
        <div className="parcel-detail-page">
            <h1 className="heading">Your Parcel details</h1>
                <ParcelItem ItemDetail={ItemData}/>
            <h2 className="heading"> Tracking Status</h2>
                <ParcelStatus ItemDetail={ItemData}/>
            <h3 className="heading"> Location </h3>
                <LocationMap ItemDetail={ItemData}/>
            <Link className="back-page" to={"/"}>
                <BiArrowBack className="BiIcons" id="BackArrow" />
                <span>Go Back</span>
            </Link>
        </div>
    );
}