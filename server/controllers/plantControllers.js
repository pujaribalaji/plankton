require('../models/database');
const mostsearched=require('../models/mostsearched');
const trending=require('../models/trending');



// get
//   homepage

exports.homepage= async(req,res)=>{
    try {
        const limitNumber=5;
        const searches=await mostsearched.find({}).limit(limitNumber);
        const latest=await trending.find({}).limit(limitNumber);

        const plant= { latest };
        res.render('index',{title:'HOME PAGE' , searches, plant });  

    } catch (error) {
        res.status(500).send({message:error.message || "Error Occured" });   
}
}

// get
//   view All based on searches

exports.exploreAllPlants= async(req,res)=>{
    try {
        const limitNumber=20;
        const searches=await mostsearched.find({}).limit(limitNumber);
        res.render('MostSearched',{title:'Most Searched' , searches});  

    } catch (error) {
        res.status(500).send({message:error.message || "Error Occured" });   
}
}

// get
//   trending inside

exports.exploretrending= async(req,res)=>{
    try {
        let trendingId=req.params.id;
        const Trending=await trending.findById(trendingId);
        res.render('trending',{title:'Trending Plants' ,Trending });  
    } catch (error) {
        res.status(500).send({message:error.message || "Error Occured" });   
    }
}


// post
//  search



exports.searchplants= async(req,res)=>{
try {
    let searchTerm=req.body.searchTerm;
    let Trending=await trending.find( { $text: { $search: searchTerm, $diacriticSensitive: true}});
    res.render('search',{title:'Search' ,Trending});
} catch (error) {
    res.status(500).send({message:error.message || "Error Occured" });     
}
    res.render('search',{title:'Search' });

}
























// async function insertDymytrendingData(){
//     try {
//         await trending.insertMany([
//             {
//                 "name":"Lily",
//                 "description":"Plants are also amazingly adaptable, finding ways to grow even in impossible environments, both hot and cold. Plants manufacture their own food from sunlight, absorb nutrients from the ground, and fool insects into spreading their pollen. Truly, they are some of nature’s finest creations.",
//                 "category":"Lily",
//                 "image":"trending1.jpg"
//             },
//             {
//                 "name":"Lotus",
//                 "description":"Plants are also amazingly adaptable, finding ways to grow even in impossible environments, both hot and cold. Plants manufacture their own food from sunlight, absorb nutrients from the ground, and fool insects into spreading their pollen. Truly, they are some of nature’s finest creations.",
//                 "category":"Lotus",
//                 "image":"trending2.jpg"
//             },
//             {
//                 "name":"Rose",
//                 "description":"Plants are also amazingly adaptable, finding ways to grow even in impossible environments, both hot and cold. Plants manufacture their own food from sunlight, absorb nutrients from the ground, and fool insects into spreading their pollen. Truly, they are some of nature’s finest creations.",
//                 "category":"Rose",
//                 "image":"trending3.jpg"
//             },
//             {
//                 "name":"cactus",
//                 "description":"Plants are also amazingly adaptable, finding ways to grow even in impossible environments, both hot and cold. Plants manufacture their own food from sunlight, absorb nutrients from the ground, and fool insects into spreading their pollen. Truly, they are some of nature’s finest creations.",
//                 "category":"cactus",
//                 "image":"trending4.jpg"
//             },
//             {
//                 "name":"Money Plant",
//                 "description":"Plants are also amazingly adaptable, finding ways to grow even in impossible environments, both hot and cold. Plants manufacture their own food from sunlight, absorb nutrients from the ground, and fool insects into spreading their pollen. Truly, they are some of nature’s finest creations.",
//                 "category":"Money Plant",
//                 "image":"trending5.jpg"
//             },
          
//         ]);       
//         } catch (error) {
//         console.log('err', + error)  
//     }
// }

// insertDymytrendingData();








// async function insertDymyMostsearchedData(){
//     try {
//         await mostsearched.insertMany([
//             {
//                 "name": "Blinkin",
//                 "image": "img1.png"
//             },
//             {
//                 "name": "Plantton",
//                 "image": "img2.png"
//             },
//             {
//                 "name": "Hibsecus",
//                 "image": "img3.png"
//             },
//             {
//                 "name": "Hetro",
//                 "image": "img4.png"
//             },
//         ]);       
//         } catch (error) {
//         console.log('err', + error)  
//     }
// }

// insertDymyMostsearchedData();