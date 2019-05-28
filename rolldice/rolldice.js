var arg = process.argv.slice(2);
var output = [];

for(var i=0; i < arg; i++){
  if(arg.length !== 1){
    console.log('input just one value!');
    break
  }
  // var score = 0;
  output.push(dice(7));
}
console.log(typeof(output));
console.log(output);

function dice(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
