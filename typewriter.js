const sentence = "hello there from lighthouse labs\n";
let timePrints = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, timePrints);
  timePrints = timePrints + 50;
}
