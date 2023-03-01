const express = require("express");

//The key.js is the file which consists of the mongodb cluster connection string
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const mongodb = require("mongodb").MongoClient;
const e = require("cors");
const nodemailer=require("nodemailer");

var selectedPolicyId;
//Routes and backend Logics Must resides on app.js
//NodeJS Middlewares
//The middle ware will be like a intermediate checks
//Common Middleware which will be executed commonly to all
app.use(cors());
app.use(bodyparser.json());
var db;
var user = "";


mongodb.connect(key, (error, result) => {
    if (error) {
        console.log("Error Occured at Database");
    } else {
        db = result.db("Insurance");
        console.log("DB Connected");
    }
});
app.post("/SignUp", (req, res) => {
    req.body._id = new Date().getTime();
    req.body.policies = "";
    console.log(req.body);
    db.collection("users").insertOne(req.body, (error, data) => {
        if (error) {
            res.status(403).json("Error occured inserting the doc");

        }
        else {
            db.createCollection(req.body.uname, (error, data) => {
                if (error) {
                    console.log(error);
                    res.status(403).json("Error on making the collection");
                } else {
                    res.json("Successfully Registered");
                }
            })
        }
    })
})
app.post("/createDatabase/:username", (req, res) => {
    console.log(req.params.username);
    db.createCollection(req.params.username);
})
app.get("/unameAvailable/:username", (req, res) => {
    console.log(req.params.username);
    db.collection("users").find({ uname: req.params.username }, { projection: { _id: 1 } }).toArray((error, data) => {
        if (error) {
            res.status(403).json("Error in finding the doc");
        } else {
            res.json(data);
        }
    })
});
app.get("/setUser/:uname",(req,res)=>{
    console.log(req.params.uname);
    user=req.params.uname;
    res.json("Successfully set the user");
})
app.post("/Login", (req, res) => {
    console.log(req.body);
    user = req.body.uname;
    db.collection("users").find(req.body, { projection: { _id: 1, uname: 1 } }).toArray((error, data) => {
        if (error) {
            res.status(403).json("Error in finding the doc");
        } else {
            res.json(data);
        }
    });
});
app.post("/AdminLogin", (req, res) => {
    console.log(req.body);
    db.collection("AdminCred").find(req.body, { projection: { _id: 1, uname: 1 } }).toArray((error, data) => {
        if (error) {
            res.status(403).json("Error in finding the doc");
        } else {
            res.json(data);
        }
    })
});
app.get("/dropcollection/:uname",(req,res)=>{
    db.collection(req.params.uname).drop((error,data)=>{
        if(error){
            res.status(403).json("Something Went wrong!!");
        }else{
            res.json("Successfully deleted the user");
        }
    })
})
app.get("/allUsers", (req, res) => {
    db.collection("users").find(null, { projection: { upassword: 0 } }).toArray((error, data) => {
        if (error) {
            res.status(403).json("Error in finding the doc");
        } else {
            res.json(data);
        }
    })
})
app.get("/getAllUsernames", (req, res) => {
    db.collection("users").find(null, { projection: { _id: 1, uname: 1 } }).toArray((error, data) => {
        if (error) {
            res.status(403).json("Error in finding the doc");
        } else {
            res.json(data);
        }
    })
})

app.delete("/deleteUser/:userid", (req, res) => {
    console.log(req.params);
    db.collection("users").deleteOne({ _id: Number(req.params.userid) }, (error, data) => {
        res.json("User deleted successfully");
    })
});

app.get("/searchUser/:searchdata?", (req, res) => {
    console.log(req.params.searchdata);
    if (req.params.searchdata) {
        var search = new RegExp(req.params.searchdata, "i");
        var searchCondi = { uname: search }
    } else {
        var searchCondi = null;
    }
    db.collection("users").find(searchCondi).toArray((error, data) => {
        res.json(data);
    })
});
app.get("/userselectedpolicy/:uname", (req, res) => {
    console.log(req.params.uname);
    db.collection(req.params.uname).find(null).toArray((error, data) => {
        if (error) {
            res.status(403).json("Error in finding the doc");
        } else {
            console.log(data);
            res.json(data);
        }
    })
})
app.get("/GetMailId/:mailid",(req,res)=>{
    var theData;
    db.collection("AllPolicies").find({ _id: Number(selectedPolicyId) }).toArray((error, data) => {
        if(error){
            res.status(403).json("Something went wrong");
        }else{
            res.json("Success");
            theData=data;
        }
    })
    var mailOptions={
        from:"RASINSURANCETEAM@outlook.com",
        to:req.params.mailid,
        subject:'Applied to the Policy',
        text:'Successfully applied to the '+theData[0].policy
    }
    transporter.sendMail(mailOptions,function(error,data){
        if(error){
            console.log(error);
        }else{
            console.log("Email sent: "+data.response);
        }
    })
})
app.get("/PolicyId/:policyid",(req,res)=>{
    selectedPolicyId=req.params.policyid;
})
app.get("/AllPolicies", (req, res) => {
    db.collection("AllPolicies").find(null).toArray((error, data) => {
        if (error) {
            res.status(403).json("Error in finding Doc");
        } else {
            res.json(data);
        }
    });
});
app.get("/searchProvider/:searchdata?", (req, res) => {
    console.log(req.params.searchdata);
    if (req.params.searchdata) {
        var search = new RegExp(req.params.searchdata, "i");
        var searchCondi = { ucompanyname: search }
    } else {
        var searchCondi = null;
    }
    db.collection("AllPolicies").find(searchCondi).toArray((error, data) => {
        res.json(data);
    })
});
app.delete("/deletePolicy/:policyid", (req, res) => {
    console.log(req.params);
    db.collection("AllPolicies").deleteOne({ _id: Number(req.params.policyid) }, (error, data) => {
        res.json("User deleted successfully");
    })
});
app.post("/setToMyPolicy", (req, res) => {
    console.log(req.body);
    console.log(user);
    db.collection(user).insertOne(req.body, (error, data) => {
        if (error) {
            res.status(403).json("Error in inserting the doc");
        } else {
            res.json("Successfully added");
        }
    })
})
app.post("/AddPolicy", (req, res) => {
    req.body._id = new Date().getTime();
    console.log(req.body);
    db.collection("AllPolicies").insertOne(req.body, (error, data) => {
        if (error) {
            res.status(403).json("Error in inserting the doc");
        } else {
            res.json("Health Policy Added Successfully");
        }
    })
})
app.get("/allmypolicies", (req, res) => {
    console.log(user);
    db.collection(user).find(null).toArray((error, data) => {
        if (error) {
            res.status(403).json("Error in getting doc");
        } else {
            res.json(data);
        }
    })
})
app.get("/getprofileData/:userid", (req, res) => {
    console.log(req.params.userid);
    db.collection("users").find({ _id: Number(req.params.userid) }).toArray((error, data) => {
        if (error) {
            res.status(403).json("Error in finding the doc");
        } else {
            res.json(data);
        }
    })
})
app.put("/updateUser", (req, res) => {
    console.log(req.body);
    var condition = { _id: req.body._id }
    var newvalues = { $set: { uname: req.body.uname, uemail: req.body.uemail, uphone: req.body.uphone, upassword: req.body.upassword } };
    db.collection("users").updateOne(condition, newvalues, (error, data) => {
        if (error) {
            res.status(403).json("Error in updating the doc");
        } else {
            res.json("User data updated successfully");
        }
    })
})
app.put("/updatePolicy",(req,res)=>{
    console.log(req.body);
    var condition={_id:req.body._id};
    var newvalues={$set:{ucompanyname:req.body.ucompanyname,uamount:req.body.uamount,policy:req.body.policy,uinsurancename:req.body.uinsurancename,ulifecover:req.body.ulifecover,uclaimsettle:req.body.uclaimsettle}};
    db.collection("AllPolicies").updateOne(condition, newvalues, (error, data) => {
        if (error) {
            res.status(403).json("Error in updating the doc");
        } else {
            res.json("Policy data updated successfully");
        }
    })
})
app.get("/getSingleUserDetails/:userid", (req, res) => {
    console.log(req.params);
    db.collection("users").find({ _id: Number(req.params.userid) }).toArray((error, data) => {
        if (error) {
            res.status(403).json("Error in finding the doc");
        } else {
            res.json(data);
        }
    })
})


app.get("/getSinglePolicyDetails/:policyid", (req, res) => {
    console.log(req.params.policyid);
    db.collection("AllPolicies").find({ _id: Number(req.params.policyid) }).toArray((error, data) => {
        if (error) {
            res.status(403).json("Error in finding the doc");
        } else {
            res.json(data);
        }
    })
})
module.exports = app;
