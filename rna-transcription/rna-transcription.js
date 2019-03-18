
export const toRna


 let transcriptor =   (toRna) => {
        switch(toRna){
            case "A":
                toRna = "U"
            break
            case "T":
                toRna = "A"
            break
            case "C":
                toRna = "G"
            break
            case "G":
                toRna = "C"
            break
            case '':
                toRna = ''
            break
            default:
                throw ''
        }
    
    return toRna
console.log(toRna)
    }

transcriptor()


