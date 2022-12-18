export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleArray(arr) {
  const copy = [...arr];
  const shuffled = [];

  while(copy.length)
    shuffled.push(copy.splice(randomInteger(0, copy.length - 1), 1)[0]);

  return shuffled;
}

export function stringifyPrice(price) {
  return `$${(price / 100).toFixed(2)}`;
}

export function cutText(text, length) {
  if(typeof text !== 'string' || text.length < 1)
    throw new Error('Text hast to be non-empty string!');
  if(!Number.isInteger(length) || length < 1)
    throw new Error('Length has to be a positive integer!');

  if(text.length <= length)
    return text;

  return `${text.slice(0, length)}...`;
}