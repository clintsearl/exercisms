export const isPangram =(testing)=>{
        const pangram= new Set();
     let phrase = Array.from(testing.toLowerCase()).filter(testing=>testing.match(/[a-z]/))
        phrase.forEach(phrase => {pangram.add(phrase)});
        // console.log(pangram)
      if(pangram.size === 26){
          return true
      }else{
          return false
      }
      
}   


        //  for(let i = 0; i <=test.length; i++){
        //     if(test[i] != /[a-z]/i){
        //           arr.push(test[i])
        //     console.log(arr)}