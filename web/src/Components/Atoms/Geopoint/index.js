import Image from 'next/image';

export default function Geopoint({lat, lng}){
	
	const coord = `${lat},${lng}`
	const MAPQUEST_KEY = process.env.NEXT_PUBLIC_MAPQUEST_KEY
	const size = "800,600"
	const zoom = 17

	const mapUrl = `http://www.mapquestapi.com/staticmap/v4/getmap?key=${MAPQUEST_KEY}&size=${size}&zoom=${zoom}&center=${coord}`;
	return (
		<Image src={mapUrl} height={800} width={1200}/>
	)
}