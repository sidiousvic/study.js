const whatIsInAName = (collection, source) => {
  // make an array from keys of source argument
  let sourcekeys = Object.keys(source);
  // filter the objects in collection that pass the reduced map test
  return collection.filter(obj =>
    sourcekeys
      // test if each object has key from source as property, and if the value pairs are identical, return true
      .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
      // reduce the booleans into a single true or false
      .reduce((a, b) => a & b)
  );
};

console.log(
  JSON.stringify(
    whatIsInAName(
      [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
      ],
      { last: "Capulet" }
    )
  )
);
