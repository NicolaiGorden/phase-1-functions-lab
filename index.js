const Hq = 42
const Feet = 264
let distanceTravelled

function distanceFromHqInBlocks(customerStreet){
    let distanceInBlocks = Math.abs(customerStreet-Hq)
    return distanceInBlocks
}

function distanceFromHqInFeet(customerStreet){
    return distanceFromHqInBlocks(customerStreet)*Feet;
}

function distanceTravelledInFeet(start, destination){
    distanceTravelled = Math.abs(start-destination)*Feet;
    return distanceTravelled
}

function calculatesFarePrice(start, destination){
    distanceTravelledInFeet(start, destination)
    if (distanceTravelled < 400){
        return 0
    }else if (distanceTravelled >= 401 && distanceTravelled <= 2000) {
        return (distanceTravelled-400)*.02
    }else if (distanceTravelled >= 2001 && distanceTravelled <= 2500) {
        return 25
    }else {
        return `cannot travel that far`
    }
}