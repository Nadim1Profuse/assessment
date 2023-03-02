const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();


app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://nkhanpts:5AfzA9Jg3DbJIGFC@cluster0.hmpi3bv.mongodb.net/?retryWrites=true&w=majority/PokemonDB');


const usersSchema={
        userName:String,
        password:String,
        
}

const pokemonsSchema={
    name:String,
    attacks:[String],
    abilities:[String],
    image:String
    
}

const User=mongoose.model("Users",usersSchema);

const Pokemons=mongoose.model("Pokemons",pokemonsSchema);





// getting user login details

app.post("/login",(req,res)=>{
    
    const usersLoginInfo=req.body;

    console.log(usersLoginInfo);

 
});





app.listen(3001,()=>{
    console.log("server is running on port 3001");
});