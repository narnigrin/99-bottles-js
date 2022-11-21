function song() {}

function verses() {}

function verse(n) {
  // Basic type checking
  if (!Number.isInteger(n) || n > 99 || n < 0) {
    throw new Error(`Expected parameter to be integer, got ${typeof n}`);
  }

  const nBottles = (number) =>
    number === 1 ? "1 bottle" : `${number} bottles`;

  return (
    `${n} bottles of beer on the wall, ${n} bottles of beer.\n` +
    "Take one down and pass it around.\n" +
    `${nBottles(n - 1)} of beer on the wall.\n`
  );
}

module.exports = { song, verses, verse };
