function saturdayFun(activity = "roller-skate"){
let message = `This Saturday, I want to ${activity}!`;
console.log(message);
return message;
}

function mondayWork(activity = "go to the office"){
    let message = `This Monday, I will ${activity}.`;
    console.log(message);
    return message;
}

function wrapAdjective(symbol) {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    }
  }
  