import Section from '#Molecules/Section';

// const sections = [
// 	{
// 		type: "FTextImage",
// 		id: 'who',
// 		title: "About Us",
// 		content: {
// 			image: require('../../Images/ananas.jpg'),
// 			text: "We are a family owned and managed pineapple farm in DRC" 
// 		}
// 	},
// 	{
// 		type: 'ImageTextCarousel',
// 		id: 'process',
// 		title: 'Our Process',
// 		appearance: 'secondary',
// 		content:{
// 			slides:[
// 				{ title: 'Plantation', text: 'Lorem Ipsom Identem', image: require('../../Images/john-foust-HkJ1AOnJF8Q-unsplash.jpg')},
// 				{ title: 'Induction Floral', text: 'Lorem Ipsom Identem', image: require('../../Images/john-foust-HkJ1AOnJF8Q-unsplash.jpg')},
// 				{ title: 'Recolte', text: 'Lorem Ipsom Identem', image: require('../../Images/john-foust-HkJ1AOnJF8Q-unsplash.jpg')}
// 			]	
// 		}
// 	},
// 	{
// 		type: 'Cards',
// 		id: 'dates',
// 		title: 'Our Dates',
// 		content:{
// 			cards:[
// 				{
// 					caption: '28 Nov. 2021',
// 					title: 'Plantation',
// 					image: require('../../Images/colin-carter-yAUdC0IcKQQ-unsplash.jpg'),
// 					text: 'We have realized that an absurd amount of people with the will, talent and passion are unable to achieve their goals for lack of proper guidance. It is with this realization that LEARNIN’ came to be.Being in the 21st century and with the advances of technology, nothing can or should hinder the potential capability of someone to learn and better themselves, even in a 3rd world country such as DRC.'
// 				},
// 				{
// 					caption: '13 Jan. 2022',
// 					title: 'Induction Floral',
// 					image: require('../../Images/dynamic-wang-Yv6FA-YbGBw-unsplash.jpg'),
// 					text: 'We have realized that an absurd amount of people with the will, talent and passion are unable to achieve their goals for lack of proper guidance. It is with this realization that LEARNIN’ came to be.Being in the 21st century and with the advances of technology, nothing can or should hinder the potential capability of someone to learn and better themselves, even in a 3rd world country such as DRC.'
// 				},
// 				{
// 					caption: '05 Mar. 2022',
// 					title: 'Recolte',
// 					image: require('../../Images/asso-myron-TsgxgSVL61s-unsplash.jpg'),
// 					text: 'We have realized that an absurd amount of people with the will, talent and passion are unable to achieve their goals for lack of proper guidance. It is with this realization that LEARNIN’ came to be.Being in the 21st century and with the advances of technology, nothing can or should hinder the potential capability of someone to learn and better themselves, even in a 3rd world country such as DRC.'
// 				}
// 			]
// 		}
// 	},
// 	{
// 		type: 'FTextImage',
// 		id: 'order',
// 		title: 'Pre-Order',
// 		appearance: 'secondary',
// 		content: {
// 			image: require('../../Images/phoenix-han-ZS_RypKo9sk-unsplash.jpg'),
// 			text: 'Our first batch of pineapples will be available on March 05, 2022. You can pre-order now and be one of the first to have a taste of your amazing pineapples'
// 		}
// 	},
// 	{
// 		type: 'ContactForm',
// 		id:'contact',
// 		title: 'Contact Us',
// 		appearance: 'secondary',
// 		content: {
// 			image: require('../../Images/fair-trade-pineapple-grower-in.jpg')
// 		}
// 	},
// 	{
// 		type: 'Address',
// 		id: 'location',
// 		title: 'Our Addresses',
// 		appearance: 'primary',
// 		height: 'half',
// 		content:{
// 			geoLoc: '132`134E235O',
// 			addresses:[
// 				{
// 					title: 'Our Offices',
// 					contacts: [
// 						{
// 							type: 'address',
// 							text: '12c, Av. Kimpwanza, Q. Djelo-Binza, C. Ngaliema, Kinshasa, DRC'
// 						},
// 						{
// 							type: 'numero',
// 							text: '+243 99 56 123'
// 						},
// 						{
// 							type: 'WhatsApp',
// 							text: '+243 99 41 102'
// 						}
// 					]
// 				},
// 				{
// 					title: 'Our Farm',
// 					contacts: [
// 						{
// 							type: 'address',
// 							text: 'Plateau des Bateke'
// 						}
// 					]
// 				}
// 			]
// 		}
// 	}
// ]


export default function({sections}){
	return(
		<main>
		{sections.map(sec => <Section key={sec._key} {...sec}/>)}
		</main>
	)
}