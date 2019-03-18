const error_Not_Natural ='Classification is only possible for natural numbers.'

//using truthy values[...Array(n+1)] Tyler's is on github

const find_Divisors = n => {[...Array(n+1).keys()].slice(1).reduce((s, a)=>{
    return s + (!(n % a) && a);
}, 0)};


export const classify = input=>{
    if (input <= 0)
    throw Error (error_Not_Natural)

    // if (input)
}



 
