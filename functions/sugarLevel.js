export function sugarLevel (){

    const MAX_SUGAR = 400;
    const MIN_SUGAR = 60;

    const sum =  Math.floor(Math.random() * (MAX_SUGAR - MIN_SUGAR + 1)) + MIN_SUGAR; 
    console.log(sum);
    return sum;

}

