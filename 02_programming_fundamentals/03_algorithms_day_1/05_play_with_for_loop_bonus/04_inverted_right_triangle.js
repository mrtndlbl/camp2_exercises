// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```
let stdout = "*****";

for (let i = 5; i > 0; i--){
  stdout = stdout.substr(0, i);
  console.log(stdout);
}
