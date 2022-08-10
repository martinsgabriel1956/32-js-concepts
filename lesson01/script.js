function firstFunction() {
  secondFunction();
  console.log("first function executed!");
}

function secondFunction() {
  thirdFunction();
  console.log("second function executed!");
}

function thirdFunction() {
  console.log("third function executed!");
}

firstFunction();