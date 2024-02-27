import mongoose, { model } from 'mongoose';
import userModel from "./models/user.model"
import bcrypt from "bcrypt"

export default async () => {
  try {
    const config = useRuntimeConfig();
    // Подключение к MongoDB

    await mongoose.connect(config.apiSecret.MONGO_URL);
    const admin = {
      username: 'admin',
      password: 'admin'
  };
  
  (async () => {
      try {
          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(admin.password, salt);
          
          const saveUser = new userModel({
              username: admin.username,
              password: hash
          });
  
          await saveUser.save();
          console.log('Пользователь успешно создан.');
      } catch (error) {
          console.error('Ошибка при создании пользователя:', error);
      }
  })();
  
    console.log('Successfully connected to MongoDB.');
  } catch (error) {
    // Обработка ошибок подключения
    console.error('Error connecting to MongoDB:', error);
    return createError({ statusCode: 500, statusMessage: 'Something went wrong.' });
  }
};