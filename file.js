const dotenv = require('dotenv').config()
const CronJob = require('cron').CronJob;
const axios = require('axios')

let recipes = ["squash pasta", "lettuce wraps", "shepherds pie", "burritos", "just candy", "carrot soup", "risotto", "jambalaya", "cauliflower wings", "zucchini noodle pasta", "fancy sandwiches", "french toast"];

const recipeSelector = () => {
    return recipes[Math.floor(Math.random()*recipes.length)];
}

var job = new CronJob('* * * * * *', function() {
  console.log(sendFoodToDiscord());
}, null, true, 'America/Los_Angeles');
console.log('After job instantiation');
job.start();

let sendFoodToDiscord = () => {
axios

  .post(process.env.DA_HOOK, {
    content: 
    "Don't forget this tasty nugget: " +
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