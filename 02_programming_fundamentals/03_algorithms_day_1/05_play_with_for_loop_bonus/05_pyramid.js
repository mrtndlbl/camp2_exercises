// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```
let stdout = "   *";
for (let i = 0; i < 4; i++){
  stdout = stdout + "**";
  console.log(stdout.substr(i,i+4));
}
