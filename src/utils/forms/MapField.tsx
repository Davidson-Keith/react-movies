import Map from "../Map";
import coordinatesDTO from "../coordinates.model";
import {useFormikContext} from "formik";

export default function MapField(props: MapFieldProps) {
  const {values} = useFormikContext<any>();

  function handleMapClick(coordinates: coordinatesDTO) {
    values[props.latField] = coordinates.lat;
    values[props.lngField] = coordinates.lng;
  }

  return (
    <Map
      coordinates={props.coordinates}
      handleMapClick={handleMapClick}
    />
  )
}

interface MapFieldProps {
  coordinates: coordinatesDTO[];
  latField: string;
  lngField: string;
}

MapField.defaultProps = {
  coordinates: []
}

