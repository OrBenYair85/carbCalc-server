import express from 'express';
import { getCarbData } from './functions/carbCalc.js';
import { sugarLevel } from './functions/sugarLevel.js';

const app = express()
const port = 5000;

app.get("/carbcalc", async (req, res) => {
    const foodName = req.query.name;

    if (!foodName) {
        return res.status(400).send('Food name is required');
    }

    try {
        const data = await getCarbData(foodName); // Await the result of getCarbData

        if (data && data.items && data.items.length > 0) {
            res.json(data); // Send the full data or specific information as needed
            console.log(data);
        } else {
            res.status(404).send('Food item not found');
        }
    } catch (error) {
        res.status(500).send('Error fetching data');
        console.error(error);
    }
});

app.get("/currentSugar", (req, res) => {
        const currentSuagr = sugarLevel();
        if(!currentSuagr)
        {
            console.log("Error with genrating sugal level");
        }
        else
        {
            console.log(currentSuagr);
        }
        
    })


      

app.listen(port, () => {console.log("Server started on port 5000") })