// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    return Math.abs(pickup - 42);
}

function distanceFromHqInFeet(pickup){
    return 264 * distanceFromHqInBlocks(pickup);
}

function distanceTravelledInFeet(pickup, destination){
    return 264 * Math.abs(pickup - destination);
}

function calculatesFarePrice(start, destination){
    let distance = 264 * Math.abs(start - destination);
    if (distance <= 400){
        return 0;
    }
    else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500){
        return 25;
    } else{
        return `cannot travel that far`;
    }
}