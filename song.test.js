const { song, verses, verse } = require("./song");

test("produces verse for 99 bottles", () => {
  expect(verse(99)).toBe(
    "" +
      "99 bottles of beer on the wall, 99 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "98 bottles of beer on the wall.\n"
  );
});
test("produces verse for 98 bottles", () => {
  expect(verse(98)).toBe(
    "" +
      "98 bottles of beer on the wall, 98 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "97 bottles of beer on the wall.\n"
  );
});
test("produces verse for 2 bottles", () => {
  expect(verse(2)).toBe(
    "" +
      "2 bottles of beer on the wall, 2 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "1 bottle of beer on the wall.\n"
  );
});
test("produces verse for 1 bottle", () => {
  expect(verse(1)).toBe(
    "" +
      "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around.\n" +
      "No more bottles of beer on the wall.\n"
  );
});
test("produces verse for 0 bottles", () => {
  expect(verse(0)).toBe(
    "" +
      "No more bottles of beer on the wall, no more bottles of beer.\n" +
      "Go to the store and buy some more.\n" +
      "99 bottles of beer on the wall.\n"
  );
});
test("produces several verses", () => {
  expect(verses(99, 97)).toBe(
    "" +
      "99 bottles of beer on the wall, 99 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "98 bottles of beer on the wall.\n" +
      "\n" +
      "98 bottles of beer on the wall, 98 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "97 bottles of beer on the wall.\n" +
      "\n" +
      "97 bottles of beer on the wall, 97 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "96 bottles of beer on the wall.\n"
  );
});
test("produces whole song", () => {
  expect(song()).toBe(
    "" +
      "99 bottles of beer on the wall, 99 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "98 bottles of beer on the wall.\n" +
      "\n" +
      "98 bottles of beer on the wall, 98 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "97 bottles of beer on the wall.\n" +
      "\n" +
      "97 bottles of beer on the wall, 97 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "96 bottles of beer on the wall.\n" +
      "\n" +
      "96 bottles of beer on the wall, 96 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "95 bottles of beer on the wall.\n" +
      "\n" +
      "95 bottles of beer on the wall, 95 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "94 bottles of beer on the wall.\n" +
      "\n" +
      "94 bottles of beer on the wall, 94 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "93 bottles of beer on the wall.\n" +
      "\n" +
      "93 bottles of beer on the wall, 93 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "92 bottles of beer on the wall.\n" +
      "\n" +
      "92 bottles of beer on the wall, 92 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "91 bottles of beer on the wall.\n" +
      "\n" +
      "91 bottles of beer on the wall, 91 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "90 bottles of beer on the wall.\n" +
      "\n" +
      "90 bottles of beer on the wall, 90 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "89 bottles of beer on the wall.\n" +
      "\n" +
      "89 bottles of beer on the wall, 89 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "88 bottles of beer on the wall.\n" +
      "\n" +
      "88 bottles of beer on the wall, 88 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "87 bottles of beer on the wall.\n" +
      "\n" +
      "87 bottles of beer on the wall, 87 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "86 bottles of beer on the wall.\n" +
      "\n" +
      "86 bottles of beer on the wall, 86 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "85 bottles of beer on the wall.\n" +
      "\n" +
      "85 bottles of beer on the wall, 85 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "84 bottles of beer on the wall.\n" +
      "\n" +
      "84 bottles of beer on the wall, 84 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "83 bottles of beer on the wall.\n" +
      "\n" +
      "83 bottles of beer on the wall, 83 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "82 bottles of beer on the wall.\n" +
      "\n" +
      "82 bottles of beer on the wall, 82 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "81 bottles of beer on the wall.\n" +
      "\n" +
      "81 bottles of beer on the wall, 81 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "80 bottles of beer on the wall.\n" +
      "\n" +
      "80 bottles of beer on the wall, 80 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "79 bottles of beer on the wall.\n" +
      "\n" +
      "79 bottles of beer on the wall, 79 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "78 bottles of beer on the wall.\n" +
      "\n" +
      "78 bottles of beer on the wall, 78 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "77 bottles of beer on the wall.\n" +
      "\n" +
      "77 bottles of beer on the wall, 77 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "76 bottles of beer on the wall.\n" +
      "\n" +
      "76 bottles of beer on the wall, 76 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "75 bottles of beer on the wall.\n" +
      "\n" +
      "75 bottles of beer on the wall, 75 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "74 bottles of beer on the wall.\n" +
      "\n" +
      "74 bottles of beer on the wall, 74 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "73 bottles of beer on the wall.\n" +
      "\n" +
      "73 bottles of beer on the wall, 73 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "72 bottles of beer on the wall.\n" +
      "\n" +
      "72 bottles of beer on the wall, 72 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "71 bottles of beer on the wall.\n" +
      "\n" +
      "71 bottles of beer on the wall, 71 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "70 bottles of beer on the wall.\n" +
      "\n" +
      "70 bottles of beer on the wall, 70 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "69 bottles of beer on the wall.\n" +
      "\n" +
      "69 bottles of beer on the wall, 69 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "68 bottles of beer on the wall.\n" +
      "\n" +
      "68 bottles of beer on the wall, 68 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "67 bottles of beer on the wall.\n" +
      "\n" +
      "67 bottles of beer on the wall, 67 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "66 bottles of beer on the wall.\n" +
      "\n" +
      "66 bottles of beer on the wall, 66 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "65 bottles of beer on the wall.\n" +
      "\n" +
      "65 bottles of beer on the wall, 65 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "64 bottles of beer on the wall.\n" +
      "\n" +
      "64 bottles of beer on the wall, 64 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "63 bottles of beer on the wall.\n" +
      "\n" +
      "63 bottles of beer on the wall, 63 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "62 bottles of beer on the wall.\n" +
      "\n" +
      "62 bottles of beer on the wall, 62 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "61 bottles of beer on the wall.\n" +
      "\n" +
      "61 bottles of beer on the wall, 61 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "60 bottles of beer on the wall.\n" +
      "\n" +
      "60 bottles of beer on the wall, 60 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "59 bottles of beer on the wall.\n" +
      "\n" +
      "59 bottles of beer on the wall, 59 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "58 bottles of beer on the wall.\n" +
      "\n" +
      "58 bottles of beer on the wall, 58 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "57 bottles of beer on the wall.\n" +
      "\n" +
      "57 bottles of beer on the wall, 57 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "56 bottles of beer on the wall.\n" +
      "\n" +
      "56 bottles of beer on the wall, 56 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "55 bottles of beer on the wall.\n" +
      "\n" +
      "55 bottles of beer on the wall, 55 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "54 bottles of beer on the wall.\n" +
      "\n" +
      "54 bottles of beer on the wall, 54 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "53 bottles of beer on the wall.\n" +
      "\n" +
      "53 bottles of beer on the wall, 53 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "52 bottles of beer on the wall.\n" +
      "\n" +
      "52 bottles of beer on the wall, 52 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "51 bottles of beer on the wall.\n" +
      "\n" +
      "51 bottles of beer on the wall, 51 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "50 bottles of beer on the wall.\n" +
      "\n" +
      "50 bottles of beer on the wall, 50 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "49 bottles of beer on the wall.\n" +
      "\n" +
      "49 bottles of beer on the wall, 49 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "48 bottles of beer on the wall.\n" +
      "\n" +
      "48 bottles of beer on the wall, 48 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "47 bottles of beer on the wall.\n" +
      "\n" +
      "47 bottles of beer on the wall, 47 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "46 bottles of beer on the wall.\n" +
      "\n" +
      "46 bottles of beer on the wall, 46 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "45 bottles of beer on the wall.\n" +
      "\n" +
      "45 bottles of beer on the wall, 45 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "44 bottles of beer on the wall.\n" +
      "\n" +
      "44 bottles of beer on the wall, 44 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "43 bottles of beer on the wall.\n" +
      "\n" +
      "43 bottles of beer on the wall, 43 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "42 bottles of beer on the wall.\n" +
      "\n" +
      "42 bottles of beer on the wall, 42 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "41 bottles of beer on the wall.\n" +
      "\n" +
      "41 bottles of beer on the wall, 41 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "40 bottles of beer on the wall.\n" +
      "\n" +
      "40 bottles of beer on the wall, 40 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "39 bottles of beer on the wall.\n" +
      "\n" +
      "39 bottles of beer on the wall, 39 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "38 bottles of beer on the wall.\n" +
      "\n" +
      "38 bottles of beer on the wall, 38 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "37 bottles of beer on the wall.\n" +
      "\n" +
      "37 bottles of beer on the wall, 37 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "36 bottles of beer on the wall.\n" +
      "\n" +
      "36 bottles of beer on the wall, 36 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "35 bottles of beer on the wall.\n" +
      "\n" +
      "35 bottles of beer on the wall, 35 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "34 bottles of beer on the wall.\n" +
      "\n" +
      "34 bottles of beer on the wall, 34 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "33 bottles of beer on the wall.\n" +
      "\n" +
      "33 bottles of beer on the wall, 33 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "32 bottles of beer on the wall.\n" +
      "\n" +
      "32 bottles of beer on the wall, 32 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "31 bottles of beer on the wall.\n" +
      "\n" +
      "31 bottles of beer on the wall, 31 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "30 bottles of beer on the wall.\n" +
      "\n" +
      "30 bottles of beer on the wall, 30 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "29 bottles of beer on the wall.\n" +
      "\n" +
      "29 bottles of beer on the wall, 29 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "28 bottles of beer on the wall.\n" +
      "\n" +
      "28 bottles of beer on the wall, 28 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "27 bottles of beer on the wall.\n" +
      "\n" +
      "27 bottles of beer on the wall, 27 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "26 bottles of beer on the wall.\n" +
      "\n" +
      "26 bottles of beer on the wall, 26 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "25 bottles of beer on the wall.\n" +
      "\n" +
      "25 bottles of beer on the wall, 25 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "24 bottles of beer on the wall.\n" +
      "\n" +
      "24 bottles of beer on the wall, 24 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "23 bottles of beer on the wall.\n" +
      "\n" +
      "23 bottles of beer on the wall, 23 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "22 bottles of beer on the wall.\n" +
      "\n" +
      "22 bottles of beer on the wall, 22 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "21 bottles of beer on the wall.\n" +
      "\n" +
      "21 bottles of beer on the wall, 21 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "20 bottles of beer on the wall.\n" +
      "\n" +
      "20 bottles of beer on the wall, 20 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "19 bottles of beer on the wall.\n" +
      "\n" +
      "19 bottles of beer on the wall, 19 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "18 bottles of beer on the wall.\n" +
      "\n" +
      "18 bottles of beer on the wall, 18 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "17 bottles of beer on the wall.\n" +
      "\n" +
      "17 bottles of beer on the wall, 17 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "16 bottles of beer on the wall.\n" +
      "\n" +
      "16 bottles of beer on the wall, 16 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "15 bottles of beer on the wall.\n" +
      "\n" +
      "15 bottles of beer on the wall, 15 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "14 bottles of beer on the wall.\n" +
      "\n" +
      "14 bottles of beer on the wall, 14 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "13 bottles of beer on the wall.\n" +
      "\n" +
      "13 bottles of beer on the wall, 13 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "12 bottles of beer on the wall.\n" +
      "\n" +
      "12 bottles of beer on the wall, 12 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "11 bottles of beer on the wall.\n" +
      "\n" +
      "11 bottles of beer on the wall, 11 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "10 bottles of beer on the wall.\n" +
      "\n" +
      "10 bottles of beer on the wall, 10 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "9 bottles of beer on the wall.\n" +
      "\n" +
      "9 bottles of beer on the wall, 9 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "8 bottles of beer on the wall.\n" +
      "\n" +
      "8 bottles of beer on the wall, 8 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "7 bottles of beer on the wall.\n" +
      "\n" +
      "7 bottles of beer on the wall, 7 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "6 bottles of beer on the wall.\n" +
      "\n" +
      "6 bottles of beer on the wall, 6 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "5 bottles of beer on the wall.\n" +
      "\n" +
      "5 bottles of beer on the wall, 5 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "4 bottles of beer on the wall.\n" +
      "\n" +
      "4 bottles of beer on the wall, 4 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "3 bottles of beer on the wall.\n" +
      "\n" +
      "3 bottles of beer on the wall, 3 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "2 bottles of beer on the wall.\n" +
      "\n" +
      "2 bottles of beer on the wall, 2 bottles of beer.\n" +
      "Take one down and pass it around.\n" +
      "1 bottle of beer on the wall.\n" +
      "\n" +
      "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around.\n" +
      "No more bottles of beer on the wall.\n" +
      "\n" +
      "No more bottles of beer on the wall, no more bottles of beer.\n" +
      "Go to the store and buy some more.\n" +
      "99 bottles of beer on the wall.\n"
  );
});
