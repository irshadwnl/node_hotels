const express = require('express');
const router=express.Router();
const MenuItem = require('./../models/MenuItem');


// MenuItem Create
router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newMenuItem = new MenuItem(data);
      const response = await newMenuItem.save();
      console.log("Data Saved")
      res.status(200).json(response)
    } catch (err) {
      console.log(err)
      res.status(500).json({ err: "Internal Server Error" })
    }
  })
  
  // MenuItem Read
  router.get('/', async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log("Data fetched")
      res.status(200).json(data)
    } catch (err) {
      console.log(err)
      res.status(500).json({ err: "Internal Server Error" })
    }
  })


  router.get('/:tasteType', async(req,res)=>{
    try{
        let data=req.params.tasteType;
        if(data=='Sweet' || data=='Spicy' || data=='Sour'){
            const response=await MenuItem.find({taste:data});
            res.status(200).json(response);
        }else{
            res.status(404).json({ err: "Invalid Taste" })
        }
    }catch(err){
        console.log(err)
        res.status(500).json({err: "Internal Server Error" })
    }
  })

  router.put('/:id', async(req,res)=>{
    try{
        const menuId=req.params.id;
        const updateMenuData=req.body;
        const response=await MenuItem.findByIdAndUpdate(menuId,updateMenuData,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:"Menu not found"})
        }

        console.log("Data Updated");
        res.status(200).json(response);
    }catch(err){
        console.log(err)
        res.status(500).json({ err: "Internal Server Error" })
    }
})


router.delete('/:id', async(req,res)=>{
  try{
      const menuId=req.params.id;
      const response= await MenuItem.findByIdAndDelete(menuId);
      if(!response){
          return res.status(404).json({error:"Menu not found"})
      }

      console.log("Data deleted")
      res.status(200).json({message:'Menu Deleted Successfully'});

  }catch(err){
      console.log(err)
      res.status(500).json({ err: "Internal Server Error" })
  }
})


module.exports=router;