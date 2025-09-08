export function weather(hour) {
  if (hour >= 6 && hour < 12) {
    console.log('sunny');
  } else if (hour >= 12 && hour < 18) {
    console.log('rainy');
  } else {
    console.log('clear');
  }
}
