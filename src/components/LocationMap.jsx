import "../styles/component/locationmap.css";
import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";


L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
});

export default function LocationMap({ItemDetail}) {
    const {location_coordinate_latitude, location_coordinate_longitude, sender, location_name} = ItemDetail;
    const position = [location_coordinate_latitude, location_coordinate_longitude];

    return (<div className="mapcontainer">
            <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution="&copy; InstaPacket 2023"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        {sender},{location_name}
                    </Popup>
                </Marker>
            </MapContainer></div>

    );
}