let ALBUMS = [];

const addAlbum = (name, tracks, releaseYear) => {
  ALBUMS.push({ name, tracks, releaseYear });
};

addAlbum(
  "NEMESIS",
  ["Doomsayer", "Sectumsempra", "Xenomorph", "Shred 'Til You're Dead"],
  "2018"
);
addAlbum(
  "DEAD RIPPER",
  ["Dead Ripper", "Bash Your Brains (Don't Swing That Bat)"],
  "2018"
);
addAlbum("SIDIOUS VIC", ["Spoonful", "Tom Cat", "Blacksnake"], "2019");
addAlbum(
  "MARTIANECROPHAGY",
  ["Necromantvla", "Hypervenom", "Iggy and Oggy", "Deathdestoyer"],
  "2021"
);
addAlbum("X8", ["X8I", "X8II", "X8III", "X8IV"], "2025");
addAlbum("X8", ["X8I", "X8II", "X8III", "X8IV"], "2025");
addAlbum("X8", ["X8I", "X8II", "X8III", "X8IV"], "2025");

// console.log(ALBUMS);

// returns all instances of album name
let pluck = (arr, name) => {
  let result = [];
  for (let obj in arr) {
    result.push(arr[obj][name]);
  }
  return result;
};

console.log(pluck(ALBUMS, "name"), " these are all the objects.");

// returns all unique instances of allbum name using [...new Set()]
const pluckUniques = (arr, property) => {
  let result = [];
  for (let obj in arr) {
    result.push(arr[obj][property]);
  }
  return [...new Set(result)];
};

console.log(pluckUniques(ALBUMS, "name"), " these are all the unique objects.");

let averageReleaseYear = arr => {
  return arr.reduce({ releaseYear });
};
