// usar valor comida contido nos case para variável let , o mesmo para o tempo
 let prato= "pipoca";
 let  tempo=10;

switch (prato){
    case "pipoca":
        if (tempo<10){
            console.log("tempo insuficiente");
        } else if (tempo==10){
            console.log("prato pronto, bom apetite !!!");
        } else if (tempo>=11 && tempo<30){
            console.log("comida queimou");
        } else {
            console.log("kabumm");
        }
        break;

        case "macarrão":
        if (tempo<8){
            console.log ("tempo insuficiente");
        } else if ( tempo==8){
            console.log ("prato pronto,bom apetite !!!");
        } else if (tempo>=9 && tempo<24){
            console.log ("comida queimou");
        } else {
            console.log ("kabumm");
        }
        break;

        case "carne":
        if (tempo<15){
            console.log ("tempo insuficiente");
        } else if ( tempo==15){
            console.log ("prato pronto,bom apetite !!!");
        } else if (tempo>=16 && tempo<45){
            console.log ("comida queimou");
        } else {
            console.log ("kabumm");
        }
        break;
        
        case "feijão":
        if (tempo<12){
            console.log ("tempo insuficiente");
        } else if ( tempo==12){
            console.log ("prato pronto,bom apetite !!!");
        } else if (tempo>=13 && tempo<36){
            console.log ("comida queimou");
        } else {
            console.log ("kabumm");
        }
        break;

        case "brigadeiro":
        if (tempo<8){
            console.log ("tempo insuficiente");
        } else if ( tempo==8){
            console.log ("prato pronto,bom apetite !!!");
        } else if (tempo>=9 && tempo<24){
            console.log ("comida queimou");
        } else {
            console.log ("kabumm");
        }
        break;



    default:
        console.log("prato inexistente");
}














