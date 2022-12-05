// Code your solution here
function findMatching (driverSource, driverExpected){
    return driverSource.filter(
        (possibleMatch)=> possibleMatch.toLowerCase() === driverExpected.toLowerCase()
    )
}

function fuzzyMatch(driverSource, driverExpected){
    return driverSource.filter(
        (possibleMatch) => possibleMatch.toLowerCase().indexOf(driverExpected.toLowerCase())=== 0
    )
}

function matchName(driverSource, driverExpected){
    return driverSource.filter((record) => record.name === driverExpected 
    )
}