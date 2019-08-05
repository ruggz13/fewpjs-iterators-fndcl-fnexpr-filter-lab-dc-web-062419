// Code your solution here
function findMatching(drivers, string){
    let driver = drivers.filter(d => {
        return d.toLowerCase() === string.toLowerCase()
    });
    return driver
}

function fuzzyMatch(drivers, string){
    let driver = drivers.filter(d => {
        return d.substring(0, string.length) === string
    });
    return driver
}

function matchName(drivers, string){
    let driver = drivers.filter(d => {
        return d.name === string
    });
    return driver
}