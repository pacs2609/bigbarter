// server/api/auth/login.post.ts
import { defineEventHandler, readBody, createError, setCookie, use } from 'h3';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event); // Expect 'username'

  // 1. Basic input validation
  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: 'Username and password are required.',
    });
  }

  // 2. Simulate User Lookup from a Database
  // In a real application, you would query your database here:
  // const user = await db.collection('users').findOne({ username });

  // --- START: Dummy User for Demonstration ---
  // A dummy user object. In a real app, this would come from your DB.
  // The 'hashedPassword' would be the result of bcrypt.hash() when the user registered.


const loginApi = $fetch('https://fontapi.bigbarter.net/login', {
  method: 'POST',
  body: {
    username: username,
    password: password,
  },
  headers: {
    'Content-Type': 'application/json',
 },
}) as Promise<{
  result: any;
  code: string | undefined;
  des: string | undefined; 
}>; // Explicitly type loginApi's return
 const loginResult = await loginApi;

 if (loginResult.code !== '200') {
  throw createError({
    statusCode: 401,
    message: loginResult.des
  });
}

 const memberData = loginResult.result.memberProfile.member;
  // Replace this with your actual database lookup
  const user = {
    id: memberData.memberId,
    username: memberData.memberUsername,
    firstname: memberData.memberName,
    lastname: memberData.memberSurname,
    address: memberData.memberAddress,
    email: memberData.memberEmail,
    phone: memberData.memberPhone,
    avatar: memberData.memberAvatar,
    bbcoin: memberData.amountBB,
    tmccoin: memberData.amountTMC,
    currencyLists: memberData.currencyLists,
    uid: memberData.uid,
    memberType: memberData.memberType,
    token : loginResult.result.token
  };
  // console.log(user)
  // --- END: Dummy User for Demonstration ---

  // 4. Generate JWT Token
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    console.error('JWT_SECRET is not defined in environment variables!');
    throw createError({
      statusCode: 500,
      message: 'Server configuration error.',
    });
  }

  const token = jwt.sign(
    {
      userId: user.id,
      username: user.username,
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
      memberType : user.memberType,
      token : user.token
    }, // Payload for the token
    jwtSecret,
    { expiresIn: '1d' } // Token expires in 1 hour
  );

  // 5. Set HTTP-Only, Secure Cookie
  // This is the most secure way to store tokens in a browser.
  // The browser automatically sends this cookie with subsequent requests to your domain.
  // JavaScript cannot access this cookie directly, preventing XSS attacks from stealing it.
  setCookie(event, 'auth_token', token, {
    httpOnly: true, // Prevents client-side JS from accessing the cookie
    secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
    maxAge: 60 * 60, // Cookie expires in 1 hour (matching token expiry)
    path: '/', // Cookie is valid for all paths in your domain
    sameSite: 'lax', // Protects against some CSRF attacks
  });

  // 6. Return success response (don't send token back in response if using HTTP-only cookies)
  return {
    message: 'Login successful',
    user: {
      id: user.id as number,
      username: user.username as string,
      firstname: user.firstname as string,
      lastname: user.lastname as string,
      email : user.email as string,
      address : user.address as string,
      phone : user.phone as string,
      avatar : user.avatar as string,
      bbcoin: user.bbcoin as number,
      tmccoin: user.tmccoin as number,
      currencyLists: user.currencyLists as [],
      uid: user.uid as string,
      memberType : user.memberType as string
    },
    // You might optionally return the token for debugging or if client-side storage is also used
    // but generally not recommended with httpOnly cookies.
    token: token,
  };
});