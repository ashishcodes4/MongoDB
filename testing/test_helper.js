const mongoose = require('mongoose');

mongoose.connect 
    .once('open', () => console.log('Good to go!!!'))
    .on('error', (error) => {
        console.warn('Warning', error)
    });


