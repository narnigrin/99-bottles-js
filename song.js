function song() {}

function verses() {}

function verse(n) {
  // Basic type checking
  if (!Number.isInteger(n) || n > 99 || n < 0) {
    throw new Error(
      `Expected parameter to be integer between 0 and 99, got ${n} (${typeof n})`
    );
  }

  const nBottles = (number) => {
    if (number === 0) return `No more bottles`;
    else if (number === 1) return "1 bottle";
    else return `${number} bottles`;
  };

  return (
    `${nBottles(n)} of beer on the wall, ${nBottles(n)} of beer.\n` +
    `Take ${n > 1 ? "one" : "it"} down and pass it around.\n` +
    `${nBottles(n - 1)} of beer on the wall.\n`
  );
}

module.exports = { song, verses, verse };
