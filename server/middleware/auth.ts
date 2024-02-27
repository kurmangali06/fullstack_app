import jwt, { JwtPayload, Jwt } from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const secret =  process.env.token;
  try {
    if (event.req.headers.authentication && secret) {
      const token = (event.req.headers.authentication as string || '').replace(/Bearer\s?/, '');      
      const decodedToken = jwt.verify(JSON.parse(token), secret);

      
      event.context.auth = { username: decodedToken };
    }
  } catch (error) {
    if(error instanceof Error) {

      console.error('Error verifying token:', error.message);
      return setResponse(event, { statusCode: 401, statusMessage: error.message });
    }
  }
});