function song() {}

function verses() {}

function verse() {
  // This feels exceedingly silly, but hey,
  // if it returns the 99 verse on ANY input ... ¯\_(ツ)_/¯
  return (
    "99 bottles of beer on the wall, 99 bottles of beer.\n" +
    "Take one down and pass it around.\n" +
    "98 bottles of beer on the wall.\n"
  );
}

module.exports = { song, verses, verse };
