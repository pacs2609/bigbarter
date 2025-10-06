// server/api/auth/me.get.ts
import { defineEventHandler, getCookie, createError } from 'h3';
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'auth_token'); // Get the token from the HTTP-only cookie

  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized: No token provided.',
    });
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    console.error('JWT_SECRET is not defined in environment variables!');
    throw createError({
      statusCode: 500,
      message: 'Server configuration error.',
    });
  }

  try {
    // Verify the token
    const decoded: any = jwt.verify(token, jwtSecret);

    // In a real app, you might re-fetch user data from DB using decoded.userId
    // to ensure the user still exists and their status hasn't changed.
    // For this example, we'll just return what's in the token.
    const user = {
      id: decoded.userId,
      username: decoded.username,
      firstname: decoded.firstname, // Placeholder name
      lastname: decoded.lastname, // Placeholder name
      email : decoded.email,
      address : decoded.address,
      phone : decoded.phone,
      avatar : decoded.avatar,
      bbcoin: decoded.bbcoin,
      tmccoin: decoded.tmccoin,
      currencyLists: decoded.currencyLists,
      uid: decoded.uid,
      memberType : decoded.memberType
    };

    return {
      message: 'Authenticated',
      user: user,
      token: token, // Optionally return token
      firstname: user.firstname,
      lastname: user.lastname,
      email : user.email,
      address : user.address,
      phone : user.phone,
      avatar : user.avatar,
      bbcoin: user.bbcoin,
      tmccoin: user.tmccoin,
      currencyLists: user.currencyLists,
      uid: user.uid,
      memberType : user.memberType
    };
  } catch (err) {
    // Token is invalid, expired, or malformed
    throw createError({
      statusCode: 401,
      message: 'Unauthorized: Invalid or expired token.',
    });
  }
});