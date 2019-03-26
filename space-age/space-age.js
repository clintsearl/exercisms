const earthyear = 31557600
// Constants for the obital periods of each planet 
// const earth = 1
// const mercury = 0.2408467
// const venus = 0.61519726
// const mars = 1.8808158
// const jupiter = 11.862615
// const saturn = 29.447498
// const uranus = 84.016846
// const neptune = 164.79132

// I plan on working out a cleaner way with arrays. either .find, or .keys or values.
// const planetValues = [
//     {name: "earth", orbit: 1},
//     {name: mercury, orbit: 0.2408467}
    

// ]
// const findValues = (planet)=>{ planetValues.find(planetValues.name === planet)
//     return planetValues.orbit}


export const age = (planet, seconds) =>{
    let orbit
    switch (planet){
        case 'earth':
            orbit = 1
        break;
        case 'mercury':
            orbit= 0.2408467
        break;
        case 'venus':
            orbit= 0.61519726
        break;
        case 'mars':
            orbit= 1.8808158
        break;
        case 'jupiter':
            orbit= 11.862615
        break;
        case 'saturn':
            orbit= 29.447498
        break;
        case 'uranus':
            orbit= 84.016846
        break;
        case 'neptune':
            orbit= 164.79132
        break;
    }
    let ageSec = seconds/(earthyear * orbit)
    ageSec = ageSec * 100
    ageSec = Math.round(ageSec)
    ageSec = ageSec / 100
    // let rounded = ageSec.toFixed(2)
    //was console.loging the right answer but wasn't passing the test...
     return ageSec
}
console.log(age('earth', 1000000000))
//  const age = (planet, ageSec) =>{
//     // arr.find(planet)
    

//    return time = (ageSec/(earthyear * orbit))
//     return time
// }


