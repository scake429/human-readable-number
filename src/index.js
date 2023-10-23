module.exports = function toReadable (number) {
  num1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
  'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  num2 = [0, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number >= 0 && number < 20) {
    return num1[number];
  } else {
    let num_arr = number.toString().split('');
    if (num_arr.length === 2) {
      if (Number(num_arr[1])) {
        return (num2[Number(num_arr[0])] + ' ' + num1[Number(num_arr[1])]);
      } else {
        return (num2[Number(num_arr[0])]);
      }        
    } else if (num_arr.length === 3) {
      if (Number(num_arr[1]) && Number(num_arr[2])) {
        if (Number(num_arr[1] < 2)) {
          return (num1[Number(num_arr[0])] + ' hundred ' + num1[Number(num_arr[1] + num_arr[2])]);
        } else {
          return (num1[Number(num_arr[0])] + ' hundred ' + num2[Number(num_arr[1])] + ' ' + num1[Number(num_arr[2])]);
        }  
      } else if (Number(num_arr[1]) && Number(num_arr[2]) === 0) {
        return (num1[Number(num_arr[0])] + ' hundred ' + num2[Number(num_arr[1])]);
      } else if (Number(num_arr[1]) === 0 && Number(num_arr[2])) {
        return (num1[Number(num_arr[0])] + ' hundred ' + num1[Number(num_arr[2])]);
      } else if (!(Number(num_arr[1])) && !(Number(num_arr[2]))) {
        return (num1[Number(num_arr[0])] + ' hundred');
      }
    }
  }
}
