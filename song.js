function song() {}

function verses(from, to) {
  // Let's check we didn't get something silly
  if (!Number.isInteger(from) || !Number.isInteger(to) || from < to)
    throw new Error(
      "Expected two integer parameters, the first larger than or equal to the second"
    );

  let output = [];

  for (let i = from; i >= to; i--) {
    output.push(verse(i));
  }

  return output.join("\n");
}

function verse(n) {
  // Basic type checking
  if (!Number.isInteger(n) || n > 99 || n < 0) {
    throw new Error(
      `Expected parameter to be integer between 0 and 99, got ${n} (${typeof n})`
    );
  }

  // Helper to pluralise and otherwise fiddle with the "x bottles" string
  const nBottles = (number) => {
    if (number === 0) return `No more bottles`;
    else if (number === 1) return "1 bottle";
    // Note: The below takes number modulo 100 to neatly handle the "0-1" case.
    // % is remainder though; to get modulo, we must add the dividend and % again.
    else return `${((number % 100) + 100) % 100} bottles`;
  };

  // Pick the right string for the middle line
  let middleLine =
    n === 0
      ? "Go to the store and buy some more.\n"
      : `Take ${n > 1 ? "one" : "it"} down and pass it around.\n`;

  return (
    `${nBottles(n)} of beer on the wall, ${nBottles(n).toLowerCase()} of beer.\n` +
    middleLine +
    `${nBottles(n - 1)} of beer on the wall.\n`
  );
}

module.exports = { song, verses, verse };
