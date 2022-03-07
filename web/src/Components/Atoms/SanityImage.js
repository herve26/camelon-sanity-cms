import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import client from '../../../client';

export default function SanityImage({src, size=2000, layout="responsive", ...rest}){
	const imageProps = useNextSanityImage(
		client,
		src
	)

	return <Image {...imageProps} layout={layout} sizes="(max-width: 800px) 100vw, 800px" {...rest}/>
}