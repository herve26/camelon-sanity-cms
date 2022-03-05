const { verify } = require('hcaptcha')
const querystring = require('querystring')

const secret = process.env.HCAPTCHA_SECRET

exports.handler = async function(event, context){
	
	if(event.httpMethod !== "POST"){
		return { statusCode: 405, body: "Method Not Allowed"}
	}

	const { token } = JSON.parse(event.body)

	try{
		if(token){
			const verified = await verify(secret, token)

			return { statusCode: 200, body: JSON.stringify( { success: verified.success }) }
		}
		else{
			return { statusCode: 400, body: JSON.stringify({ error: "Wrong Data" }) }
		}
	}
	catch(err){
		return { statusCode: 500, body: JSON.stringify( { error: "Something Went Wrong" }) }
	}
}