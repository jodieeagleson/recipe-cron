require('dotenv').config()
const CronJob = require('cron').CronJob;
const axios = require('axios')

let recipes = ["gnocchi bake","tacos", "carrot soup", "nachos", "panzerotti", "Squash pasta", "Lettuce wrap", "Monkey Brains", "Shepherds pie", "Burrito",  "Carrot soup", "Risotto", "Jambalaya", "Cauliflower wings", "Zucchini noodle pasta", "Fancy sandwiches", "French toast", "Tomato salad"];

const recipeSelector = () => {
    return recipes[Math.floor(Math.random()*recipes.length)];
}

var job = new CronJob('1 14 * * *', function() {
  console.log(sendFoodToDiscord());
}, null, true, 'America/Toronto');
console.log('After job instantiation');
job.start();

let sendFoodToDiscord = () => {
axios

  .post(process.env.DA_HOOK, {
    content: 
    "Don't forget this tasty nugget:  " +
    recipeSelector()
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
}