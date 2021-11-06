var CronJob = require('cron').CronJob;

let recipes = ["lasagna", "lettuce wraps", "shepherds pie", "burgers", "just candy"];

const recipeSelector = () => {
    return recipes[Math.floor(Math.random()*recipes.length)];
}

console.log('Before job instantiation');
var job = new CronJob('* */1 * * *', function() {
  console.log(recipeSelector(recipes));
}, null, true, 'America/Los_Angeles');
console.log('After job instantiation');
job.start();