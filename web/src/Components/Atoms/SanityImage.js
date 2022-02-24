import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../client';

export default function SanityImage({src, size=2000, layout="intrinsic", ...rest}){
	const source = imageUrlBuilder(client).image(src).width(size).auto('format').url()

	return <Image layout={layout} src={source} {...rest}/>
}