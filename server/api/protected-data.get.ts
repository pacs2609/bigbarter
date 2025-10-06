// server/api/protected-data.get.ts
import { defineEventHandler, getCookie, createError } from 'h3';
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'auth_token'); // Get token from cookie

  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized: Access token missing.',
    });
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    console.error('JWT_SECRET is not defined!');
    throw createError({
      statusCode: 500,
      message: 'Server configuration error.',
    });
  }

  try {
    const decoded: any = jwt.verify(token, jwtSecret);
    // You can access decoded user info, e.g., decoded.userId, decoded.username
    return {
      data: `Hello ${decoded.username}! You successfully accessed protected information.`,
      user: {
        id: decoded.userId,
        username: decoded.username,
      }
    };
  } catch (err) {
    console.error('Error verifying token for protected data:', err);
    throw createError({
      statusCode: 401,
      message: 'Unauthorized: Invalid or expired token.',
    });
  }
});