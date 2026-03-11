const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact",(req,res)=>{
  const {name,email,message} = req.body;

  console.log("New Message:");
  console.log(name,email,message);

  res.json({msg:"Message sent successfully 😊"});
});

app.listen(5000,()=>{
  console.log("Server running on http://localhost:5000");
});
