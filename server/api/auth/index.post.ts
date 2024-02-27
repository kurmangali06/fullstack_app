import jwt from 'jsonwebtoken';
import userModel from '../../models/user.model';
import bcrypt from "bcrypt"

export default defineEventHandler(async (event) => { 
    const body = await readBody(event);
    const secret =  process.env.token;
    const user = await userModel.findOne({ username: body.username });
    if(!user) {
        return  false
      }

      const isValidPass = await bcrypt.compare(body.password, user.password);
      if(!isValidPass) {
        return false
      }
      if(secret) {
        const token = jwt.sign({
          username: user.username,
        },
        'secret123',
        {
          expiresIn: '30d',
        });
        return token
      }
      return false

});
