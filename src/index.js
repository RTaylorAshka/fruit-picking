import { foods } from './foods'
import { choice, remove } from './helpers'

let fruit = choice(foods);

console.log(`I'd like one ${fruit}, please.`);

console.log(`Here you go: ${fruit}`);

remove(foods, fruit);

console.log(`Delicious! May I have another?`);

console.log(`I'm sorry, we're all out of ${fruit}. We have ${foods.length} fruits left.`);

