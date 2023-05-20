const { text } = require('express');
const mongoose=require('mongoose');

const trendingSchema=new mongoose.Schema({
    name:{
        type: String,
        required:'This field is Required.'
    },
    description:{
        type: String,
        required:'This field is Required.'
    },
    image:{
        type: String,
        required:'This field is Required.'
    },
    

});

trendingSchema.index({ name: 'text', description: 'text'});
//wildCard Indexing

trendingSchema.index({ "$**" : 'text'});


module.exports=mongoose.model('trending', trendingSchema);