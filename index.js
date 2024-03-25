// Code your solution here
function findMatching(drivers, searchTerm) {
    return drivers.filter(driver => driver.toLowerCase().includes(searchTerm.toLowerCase()));
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}
function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name)
}