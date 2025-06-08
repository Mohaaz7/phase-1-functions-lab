// Code your solution in this file!
// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
  const hqLocation = 42;
  return Math.abs(someValue - hqLocation);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(someValue) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(someValue) * feetPerBlock;
}

// Function to calculate distance traveled in feet between two blocks
function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(destination - start) * feetPerBlock;
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
