//              0
var pronoun = ["the", "our"];
//            0       1
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(pronoun[i] + adj[j] + noun[k]);
    }
  }
}
