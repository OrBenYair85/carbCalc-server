import { sugarLevel } from "./sugarLevel.js";




export function carbSugarCacl(){
    const currentSuagr = sugarLevel();
    const idiealSuagr = 120;
    const carbSugarRate = 1.5;
    const unitSugarRate = 20;
    const carbs = 0;


    const newCurrentSugar = Math.floor(currentSuagr + (carbs * carbSugarRate));

    const insulinUnit = (newCurrentSugar - idiealSuagr) / unitSugarRate;

    const response = (`Your first sugar was ${currentSuagr} and after eacting ${carbs} carbs you are now on ${newCurrentSugar} sugar level And to lower your sugar you need to use ${insulinUnit > 0 ? insulinUnit : 0 } units`);
    return response;
}


