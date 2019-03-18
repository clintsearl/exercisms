
export const toRna = (dna) => {
//Someone else used an array [] and .push to add them to the array, then .join [''] with '' to make it a string
    let i = 0
    let rnaString=""
    // do{
for(i=0; i< dna.length; i++){
    //   had to make sure I was passing in i to iterate over the whole string, and look and each letter.
        switch(dna.charAt(i)){
                case "A":
                    rnaString +="U"
                break
                case "T":
                    rnaString  +="A"
                break
                case "C":
                    rnaString  += "G"
                break
                case "G":
                //
                    rnaString  = rnaString.concat("C")
                break
                // don't seem to need this because it is declared as a "" and so would return that as well.... or maybe it doesn't care about the text in the default
                // case "":
                //     rnaString = ""
                // break
                default:
                    throw "Invalid input DNA."
        }
        // i++
    // }while (i<= dna.length)  
    }
   
        return rnaString
    }
