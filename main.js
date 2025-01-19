var d = [];
for (var i = 0; i < 256; i++) {
  if (i < 128) {
    d[i] = i << 1;
  } else {
    d[i] = (i << 1) ^ 0x11b;
  }
}

var x = 180
var xi = 17;
var x2 = d[x];
var x4 = d[x2];
var x8 = d[x4];
var x16 = d[x8];

console.log((x16 ^ x));


console.log("----------");
console.log(x.toString(16));
console.log(x.toString(2));
console.log(xi.toString(16));
console.log(xi.toString(2));

console.log("----------");


var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);

console.log(sx + " | " + sx.toString(2) + " | " + sx.toString(16));
console.log((xi).toString(2).padStart(16, '0'));
console.log((xi << 1).toString(2).padStart(16, '0'));
console.log((xi << 2).toString(2).padStart(16, '0'));
console.log((xi << 3).toString(2).padStart(16, '0'));
console.log((xi << 4).toString(2).padStart(16, '0'));
console.log("----------");
console.log((sx).toString(2).padStart(16, '0'));
console.log((sx >>> 8).toString(2).padStart(16, '0'));
console.log((sx & 0xff).toString(2).padStart(16, '0'));
console.log((0x63).toString(2).padStart(16, '0'));
console.log("----------");
console.log((sx >>> 8));
console.log((sx & 0xff));

sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
console.log("----------");
console.log((sx).toString(2).padStart(16, '0'));

console.log(sx + " | " + sx.toString(16));

x = x2 ^ d[d[d[x8 ^ x2]]];// x2 + (x8 + x2)^8
xi ^= d[d[xi]]; // xi ^ xi4

console.log("----------");
console.log(x);
console.log(xi);



