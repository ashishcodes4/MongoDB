const mongoose = require('mongoose');

mongoose.connect 
    .once('open', () => console.log('Good to go!!!'))
    .on('Error', (error) => {
        console.warn('Error', error)
    });