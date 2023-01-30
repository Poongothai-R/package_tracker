import "../styles/component/trackhistory.css";
import ParcelCard from "./ParcelCard";

export default function TrackHistory({data}) {

    const parcelItem = data.map((recs) => (
        <ParcelCard key={recs.id} cardData={recs} />
    ));

    return(
        <div className="track-history">
            <h1>Your Packages..</h1>
            <div className="parcel-list">{parcelItem}</div>
        </div>
    )
}