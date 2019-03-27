/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
// //
// Bob answers 'Sure.' if you ask him a question.

// He answers 'Whoa, chill out!' if you yell at him.

// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.
export const hey = (message) => {
 let tmessage = message.trim()
    if(tmessage.endsWith('?')){
      if (tmessage === tmessage.toUpperCase()){
        return 'Calm down, I know what I\'m doing!'
      }
      return 'Sure.'
    }
    else if(tmessage.endsWith('!')){
      return 'Whoa, chill out!'
    }
    else if(tmessage.endsWith('!') && tmessage !== tmessage.toUpperCase()){
      return 'Calm down, I know what I\'m doing!'
    }
    else if(tmessage === ''){
      return 'Fine. Be that way!'
    }
    else if(tmessage === tmessage.toUpperCase())
      return 'Whoa, chill out!'
    else{
      return 'Whatever.'
    }
};
