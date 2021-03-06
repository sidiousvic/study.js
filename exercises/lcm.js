const gcd = (n, m) => {
  if (n > m) [n, m] = [m, n];
  let r = n % m;
  while (r > 0) {
    n = m;
    m = r;
    r = n % m;
  }
  return m;
};

let lcm = (n, m) => {
  return (m * n) / gcd(m, n);
};

console.log(gcd(210, 45));
console.log(lcm(1, 5));
