
// BEGIN (write your solution here)

const m2mm = (m) => m * 1000;

export default (height, width, length) => {
  const brickLength = 250;
  const brickWidth = 125;
  const brickHeight = 65;

  const heightMm = m2mm(height);
  const widthMm = m2mm(width);
  const lengthMm = m2mm(length);

  const layers = heightMm / brickHeight;
  const perimeter = (widthMm + lengthMm) * 2;
  const bricksInOneLayer = (perimeter - (4 * brickWidth)) / brickLength;

  return bricksInOneLayer * layers;
};

// END
