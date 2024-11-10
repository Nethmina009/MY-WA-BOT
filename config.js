const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "TUMDnSAJ#1J2FV3mMLZhfuvAUrJqgvynhekifx7WHDK9bEpSkyeg",
MONGODB: process.env.MONGODB || "mongodb+srv://wbot7016:wbot234@#@cluster0.eusmm.mongodb.net/",
};
