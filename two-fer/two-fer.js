import { type } from "os";

export const twoFer = (name) =>{

    if (name === undefined) { 
      name = "you"
    }
    // (typeof(name) === undefined ? 'you' :name)
    return `One for ${name}, one for me.`

    
}