`use strict`;


const CronJob = require('cron').CronJob;
const shell = require(`shelljs`);
module.exports = function (app) {
    function runCron() {
        console.log(`Just run...`);
        console.log(`then stop`);
        if (shell.exec("node sayHello.js").code !== 0) {
            console.log(`something is wrong everywhere`)
        }
    }
    const job = new CronJob({
        cronTime: '*/2 * * * * *',
        onTick: runCron,
        start: false
    });
    job.start();
}