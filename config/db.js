import mongoose from "mongoose";


const connecDB=  async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connected to the mongo db ${conn.connection.host}`);
    
        
    } catch (error) {
        console.log("Error coming in mongodb " , error.message);
        
    }
}



export default connecDB