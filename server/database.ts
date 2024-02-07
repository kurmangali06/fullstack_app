import mongoose from 'mongoose'
export default async () => {
  const config = useRuntimeConfig()
    try {
        await mongoose.connect(config.apiSecret.MONGO_URL)
        console.log('Successfully connected to DB.')
    } catch (error) {
        console.log(error);
        
        return createError({ statusCode: 500, statusMessage: 'Something went wrong.' })
    }
}