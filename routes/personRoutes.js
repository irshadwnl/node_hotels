const express = require('express');
const router=express.Router();
const Person = require('./../models/Person');

// Person Data Create
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data Saved")
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({ err: "Internal Server Error" })
  }
})


// Person Data Read
router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data fetched")
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json({ err: "Internal Server Error" })
  }
})

router.get('/:workType', async(req,res)=>{
    try{
      const data=req.params.workType;
      if(data=='chef' || data=='waiter' || data=='manager'){
        const response = await Person.find({work:data})
        console.log("data fetched")
        res.status(200).json(response);
      } else{
        res.status(404).json({err:'Invalid wprkType'})
      }
    }catch(err){
      console.log(err)
      res.status(500).json({ err: "Internal Server Error" })
    }
  })

router.put('/:id', async(req,res)=>{
    try{
        const personId=req.params.id;
        const updatePersonData=req.body;
        const response=await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:"person not found"})
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
        const personId=req.params.id;
        const response= await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:"person not found"})
        }

        console.log("Data deleted")
        res.status(200).json({message:'Person Deleted Successfully'});

    }catch(err){
        console.log(err)
        res.status(500).json({ err: "Internal Server Error" })
    }
})

module.exports=router;