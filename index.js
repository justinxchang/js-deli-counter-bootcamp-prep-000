function takeANumber(line, name){
  line.push(name);
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 1){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(arr){
  if(arr.length > 1){
    for(let i=0; i<arr.length; i++){
      return `${i+1}. ${arr[i]}`;
     }
    } else {
      return "The line is currently empty."
    }
}
