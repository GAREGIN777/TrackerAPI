const fs = require('fs');
const path = require('path');

const configDirectory = path.join(__dirname, 'config');

// Initialize an empty configuration object
let config = {};

// Read all files in the config directory
fs.readdirSync(configDirectory).forEach(file => {
    const configPath = path.join(configDirectory, file);
    // Merge configuration from each file into the main config object
    const configName = path.basename(configPath, '.js');
    config[configName] = require(configPath);
});

module.exports = config;