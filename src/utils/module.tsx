export const capitalize = (str: string) => {
  const arr = str.trim().split('');
  let secondIndex;
  const first = arr[0].toUpperCase();
  arr[0] = first;

  if (arr.includes(' ')) {
    secondIndex = arr.indexOf(' ') + 1;
    arr[secondIndex] = arr[secondIndex].toUpperCase();
  }

  return arr.join('');
};