const express=require('express');
const router=express.Router();
const plantControllers=require('../controllers/plantControllers');

// App routes

router.get('/',plantControllers.homepage);
router.get('/MostSearched',plantControllers.exploreAllPlants);
router.get('/trending/:id',plantControllers.exploretrending);
router.post('/search',plantControllers.searchplants);



module.exports=router;