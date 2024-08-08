import { sugarLevel } from "./sugarLevel.js";

export function carbSugarCacl(){
    const currentSuagr = sugarLevel();
    const idiealSuagr = 120;
    const carbSugarRate = 1.5;
    const unitSugarRate = 20;
    const carbs = 47;


    const newCurrentSugar = Math.floor(currentSuagr + (carbs * carbSugarRate));

    const insulinUnit = (newCurrentSugar - idiealSuagr) / unitSugarRate;

    console.log(`Your first sugar was ${currentSuagr} and after eacting ${carbs} carbs you are now on ${newCurrentSugar} sugar level And to lower your sugar you need to use ${insulinUnit} units`);
}

carbSugarCacl();

