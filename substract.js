module.exports = function substract(a, b) {
  if (a < b) throw new Error("Negative result not allowed");
  return a - b;
};
