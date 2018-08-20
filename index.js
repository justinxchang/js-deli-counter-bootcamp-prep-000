

function takeANumber(currentLine, name){
  for(let i = 0; i<currentLine.length; i++){
    currentLine.push(name);
  }
  return (`Welcome, ${name}. You are number ${currentLine.length} in line.`)
}