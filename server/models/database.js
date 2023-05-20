const mongoose=require('mongoose');
mongoose.connect(process.env.MANGODB_URI ,{ useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',function(){
    console.log('connected')
});

require('./mostsearched');

require('./trending');