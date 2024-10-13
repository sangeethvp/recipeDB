const Recipe = require('../models/recipeModel');

exports.createRecipe = async(req,res) =>{
    
    try{
        const newrecipe = new Recipe(req.body);
        await newrecipe.save();
        res.status(201).json(newrecipe)

    }catch(error){
        res.status(400).json({message:"error creating",error})
    }
};


exports.getAllRecipe = async(req,res) =>{
    try{
        const recipes = await Recipe.find();
        res.status(200).json(recipes)

    }catch(error){
        res.status(500).json({message:"error finding",error})
    }
};

exports.getRecipeByid = async(req,res) =>{
    try{
        const recipes = await Recipe.findById(req.params.id);
        if(!recipes)return res.status(402).json({message:'not found'})
            res.status(200).json(recipes)
    }catch(error){
        res.status(500).json({message:"error finding",error})
    }
};

exports.updateRecipe = async(req,res) =>{
    const {Food,ingredients,Comments} = req.body 
    try{
        const updatedrecipes = await Recipe.findByIdAndUpdate(req.params.id,{Food,ingredients,Comments},{new:true});
        if(!updatedrecipes)return res.status(402).json({message:'not found'})
            res.status(200).json(updatedrecipes)
    }catch(error){
        res.status(500).json({message:"error finding",error})
    }
};


exports.deleteRecipe = async(req,res) =>{
    try{
        const deletedrecipes = await Recipe.findByIdAndDelete(req.params.id);
        if(!deletedrecipes)return res.status(404).json({message:'not found'})
            res.status(200).json(deletedrecipes)
    }catch(error){
        res.status(500).json({message:"error finding",error})
    }
};

