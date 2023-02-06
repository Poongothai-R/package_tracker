import "../styles/component/locationmap.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

export default function LocationMap({ ItemDetail }) {
  const {
    location_coordinate_latitude,
    location_coordinate_longitude,
    location_name,
  } = ItemDetail;
  const position = [
    location_coordinate_latitude,
    location_coordinate_longitude,
  ];

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution="&copy; InstaPacket 2023"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Tooltip direction="left" offset={[-20, 0]} opacity={50} permanent>
            {location_name}
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
}
