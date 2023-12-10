import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { customErrors } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  // const hashedPassword = bcryptjs.hashSync(password,10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save(); //takes time to save depending on internet speed
    res.status(201).json("User Created Successfully!!!");
  } catch (err) {
    // res.status(499).json(err.message);
    // next(customErrors(550,'Test Error'));
    next(err);
  }
};



export const signin = async (req,res,next) =>{
  const {email,password} = req.body;
  try{
    const validUser = await User.findOne({email}) || await User.findOne({username: email});
    if(!validUser) return next(customErrors(404,"User Not Found"));
    const validPassword = await bcryptjs.compare(password,validUser.password);
    if(!validPassword) return next(customErrors(401,"Invalid Credentials"));
    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET_KEY);
    const { password: pass, ...REST} = validUser._doc;
    res.cookie('access_token', token, { httpOnly: true }).status(200).json(REST);          //expires: 24*60*60

  }catch(err){
    next(err);
  }
};


export const google = async(req, res, next) => {
  const user = await User.findOne({email: req.body.email});
  if(user){
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);
    const {password: pass, ...rest } = user._doc;
    res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
  }
  else{
    const generateUsername = req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(10).slice(-4);
    // random username to store in data base because sign-in with google does not provide username input ----->> remove space between name and add 4 random digits at the end
    const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);   
    // random password to store in data base because sign-in with google does not provide password input ----->> 8 digit password + 8 digit password
    const hashedPassword = await bcryptjs.hash(generatePassword, 10);
    const newUser = new User({username: generateUsername , email: req.body.email , password: hashedPassword, avatar: req.body.photo});


    await newUser.save();
    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET_KEY);
    const {password: pass, ...rest } = newUser._doc;
    res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);
    
  }
}



export const signOut = async (req,res,next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json('User logged out successfully!');
  } catch (error) {
    next(error);
  }
}
