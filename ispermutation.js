function ispermutation(stringa, stringb){
  if (stringa.length !== stringb.length) return false;
  var length = stringa.length; 
  var arraya = stringa.split('').sort();
  var arrayb = stringb.split('').sort();
  for (var i = 0; i < length; i++) {
    if (arraya[i] !== arrayb[i]) return false; 
  };
  return true; 
}

console.log(ispermutation("dog", "god")); // true
console.log(ispermutation("dog", "gdo")); // true
console.log(ispermutation("dog", "odg")); // true
console.log(ispermutation("dog", "ogg")); // false
