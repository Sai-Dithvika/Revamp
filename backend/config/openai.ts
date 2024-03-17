

import dotenv from 'dotenv';
dotenv.config();

import OpenAI from 'openai';



const gptassist = async (prompt:any) =>{
        const openai = new OpenAI({
  organization: process.env.OPEN_API_KEY ,  
  apiKey: process.env.OPEN_API_ORG 
});
         console.log(prompt);
        
         try{
		 const response = await openai.completions.create({
			 model:'gpt-3.5-turbo-instruct',
			 prompt : prompt,
			 max_tokens : 2000,
		})
        const data = response.choices[0].text.trim();
	//	console.log(data);
        return data;
	}
	catch(err){
		console.error('Error:' , err);
        return null;
	}
}

export {gptassist};