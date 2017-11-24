// # The sea with some whirlpools (30 by 9)
// And to spice things up, add an X at the positions 25:2 and 7:9 and a 0 at the positions 6:4 and 18:7
//
// ```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~
// ```
let stdout = [];
for (let ligne = 1; ligne <= 9; ligne++){
  for (let colonne = 1; colonne <= 30; colonne++){
    if (ligne === 2 && colonne === 25) {
      stdout[colonne] = "X");
    } else if (ligne === 9 && colonne === 7){
      console.log("X");
    } else if (ligne === 4 && colonne === 6){
      console.log(0);
    } else if (ligne === 7 && colonne === 18){
      console.log(0);
    } else {
      console.log("~");
    }
    console.log(stdout[ligne]);
  }
}
