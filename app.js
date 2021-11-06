function filter_list(l) {
  let cat = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] == "number") {
      cat.push(l[i]);
    }
  }
  console.log(cat);
  return cat;
}
