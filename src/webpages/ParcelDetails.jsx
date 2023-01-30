import "../styles/webpages/parceldetails.css";
import ParcelItem from "../components/ParcelItem";
import {useParams} from "react-router-dom";
import ParcelStatus from "../components/ParcelStatus";
import LocationMap from "../components/LocationMap";


export default function ParcelDetails({ParcelData}) {

    const {id} = useParams();
    const ItemData = ParcelData.find((recs) => Number(recs.parcel_id) === Number(id));

    return (
        <div className="parcel-detail-page">
            <ParcelItem ItemDetail={ItemData}/>
            <h1> Tracking Status</h1>
            <ParcelStatus ItemDetail={ItemData}/>
            <h1> Location </h1>
            <div className="locationmap">
                <LocationMap ItemDetail={ItemData}/>
            </div>
        </div>
    );
}