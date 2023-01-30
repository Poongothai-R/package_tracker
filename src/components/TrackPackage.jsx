import "../styles/component/trackpackage.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";


export default function TrackPackage() {

    const ParcelNo = useRef("");
    const [parcel_id, setParcelId] = useState(0);

    return (
            <div className="track-box">
                <span> Track Your Package </span>
                <input type="text" placeholder="Enter your parcel_id" id="parcelNo-input"
                     onChange={(e)=>setParcelId(e.target.value)} ref={ParcelNo} ></input>
                <Link id="track-now-btn" to={`/parcel/${parcel_id}`}>Track Now</Link>
            </div>
    );
}