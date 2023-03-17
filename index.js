function scuberGreetingForFeet(a){
  // Write your code here!
  let result;
  if (a <= 400){
   return result = 'This one is on me!';
  }

  else if(a>2000 && a<2500){
    return result = 'I will gladly take your thirty bucks.';
  }

  else if(a>2500){
    return result = 'No can do.';
  }

  
}

console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good.": "No go.";
}

console.log(ternaryCheckCity("NYC"));


// 
const tip = 'generous';
 function switchOnCharmFromTip(tip) {
   switch (tip) {
     case 'generous':
     return ('Thank you so much.');
     
     
     case 'not as generous':
     return ('Thank you.');
     
     
     default:
     return ('Bye.');
   }
 }

console.log(switchOnCharmFromTip('generous'));