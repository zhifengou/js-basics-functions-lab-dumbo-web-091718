// Code your solution in this file!
// function happyHolidays(){
//   return "Happy holidays!"
// }
// function happyHolidaysTo(name){
//   return 'Happy holidays,${name}!'
// }

// function happyHolidayTo(holiday,name){
//   return 'Happy ${holiday}.${name}!'
// }

// function holidayCountdown(holiday,days){
//   return 'It\'s ${days} until ${holiday}'
// }
function distanceFromHqInBlocks(location) {
  let distance;
  location>=42?distance=location-42:distance=42-location;
  return distance;
} 
function distanceFromHqInFeet(location){
  let distance;
  location>=42?distance=(location-42)*264:distance=(42-location)*264;
  return distance
}
function distanceTravelledInFeet(loc1,loc2){
  let distance;
  loc2>loc1?(loc2-loc1)*264:(loc1-loc2)*264;
  return distance;
}
function calculatesFarePrice(start,destination){
  let price;
  let distance;
  if(calculatesFarePrice(start,destination)<400){
    price=0;
  }
  else if (calculatesFarePrice(start,destination)>2500){
    return 'cannot travel that far';
  }
  else if (calculatesFarePrice(start,destination)>2000){
    price=25;
  }
  else {
    distance =calculatesFarePrice(start,destination)-400;
    price=distance*0.02;
  }
  return price;
}