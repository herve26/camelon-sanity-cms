import Image from 'next/image';
import { StaticGoogleMap, Marker} from 'react-static-google-map';

export default function Geopoint({lat, lng}){
	
	const coord = `${lat},${lng}`
	const key = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY
	const size = "800x600"

	return (
		<StaticGoogleMap size={size} apiKey={key} format="JPG">
			<Marker location={coord} color="0x28BD4D" label="P"/>
		</StaticGoogleMap>
	)
}