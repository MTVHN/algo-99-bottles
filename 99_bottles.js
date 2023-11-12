function bottleSong(number) {
  // Write your code here!
  for (let i = number; i > 0; i--){
    
    let bottles = i == 1 ? 'bottle' : 'bottles';
    let bottle = i - 1 == 1 ? 'bottle' : 'bottles';

    console.log(`${i} ${bottles} of beer on the wall, ${i} ${bottles} of beer.`);
    console.log(`You take one down and pass it around, ${i - 1 == 0 ? 'no more': i - 1} ${bottle} of beer on the wall.`);
    
    if (i - 1 == 0){
      console.log(`No more bottles of beer on the wall, no more bottles of beer.
      Go to the store and buy some more, ${number} bottles of beer on the wall.`)
    } 
  }
};

bottleSong(4);
