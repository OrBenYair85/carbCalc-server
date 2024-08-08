import { json } from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

export async function getCarbData(foodName) {
    const apiKey = process.env.FOOD_API_KEY;
    const apiUrl = 'https://api.calorieninjas.com/v1/nutrition?query=';//the URL api
    const urlToFetch = `${apiUrl}${foodName}`


    try{
        const response = await fetch(urlToFetch, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        });
        if(response.ok)
        {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;
        }
        else {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

    }
    catch(error){
        console.log(error);
    }
}
