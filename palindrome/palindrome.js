function isPalindrome(str) {
  var noSpaces = str.split(" ").join("").toLowerCase();
  var mid = Math.floor(noSpaces.length/2);
  // console.log("mid is:",mid);
  var last = noSpaces.length - 1;
  // console.log("LAST is:",last);
  // //livewithoutevil
  // console.log("STR IS:",noSpaces);
  // console.log("str length is", noSpaces.length);



  for (var i = 0; i <= mid; i++) {
    if(noSpaces.length === 1){
      // console.log("SINGLE LETTER");
      return true;
    } else if (noSpaces[i] !== noSpaces[last - i]){
      return false;
    }
  }
  return true;
}

//Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);

