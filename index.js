function takeANumber(currentLine, name){
  currentLine.push(name);
  return (`Welcome, ${name}. You are number ${currentLine.length} in line.`)
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 1){
    katzDeliLine.shift();
    return katzDeliLine
  } else {
    return "There is nobody waiting to be served!"
  }
}