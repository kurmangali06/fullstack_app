import mongoose from 'mongoose';

export default async () => {
  try {
    const config = useRuntimeConfig();
    // Подключение к MongoDB
    await mongoose.connect(config.apiSecret.MONGO_URL);
    console.log('Successfully connected to MongoDB.');
  } catch (error) {
    // Обработка ошибок подключения
    console.error('Error connecting to MongoDB:', error);
    return createError({ statusCode: 500, statusMessage: 'Something went wrong.' });
  }
};