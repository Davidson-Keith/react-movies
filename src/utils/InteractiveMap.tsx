import {MapContainer, Marker, TileLayer, useMapEvent} from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import coordinatesDTO from "./coordinates.model";
import {useState} from "react";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37]
})

// for the pin
L.Marker.prototype.options.icon = defaultIcon;

export default function InteractiveMap(props: interactiveMapProps) {
  const [stateCoordinates, setStateCoordinates] = useState<coordinatesDTO[]>([]);

  return (
    <>
      <MapContainer
        center={[-28.058870, 153.442070]}
        zoom={14}
        style={{height: props.height}}
      >
        <>
          <TileLayer
            attribution="React Movies"
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClick setCoodinates={clickCoordinates => {
            setStateCoordinates([clickCoordinates]);
          }}/>
          {stateCoordinates.map((markerCoordinates, index) => {
            return <Marker key={index} position={[markerCoordinates.lat, markerCoordinates.lng]}/>
          })}
        </>
      </MapContainer>
    </>
  )
}

interface interactiveMapProps {
  height: string;
}

InteractiveMap.defaultProps = {
  height: '300px'
}

function MapClick(props: mapClickProps) {
  useMapEvent('click', eventArgs => {
    props.setCoodinates({lat: eventArgs.latlng.lat, lng: eventArgs.latlng.lng})
  })
  return null;
}

interface mapClickProps {
  setCoodinates(coordinates: coordinatesDTO): void;
}