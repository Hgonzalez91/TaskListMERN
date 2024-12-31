import mongoose from 'mongoose'
const MONGOOSE_URI = 'mongodb+srv://hectorlgonzalez91:fqFWyJBOVBDaBM0W@cluster0.orjhw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

//MongoDB ATLAS CONNECTION
mongoose
.connect(MONGOOSE_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error(err))