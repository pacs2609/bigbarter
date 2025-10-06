// server/api/auth/logout.post.ts
import { defineEventHandler, deleteCookie } from "h3";

export default defineEventHandler( async (event) => {
  const username = getCookie(event, "username");
  const password = getCookie(event, "password");

  const logout = $fetch("https://fontapi.bigbarter.net/logout?username=" + username + "&password=" + password , {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }) as Promise<{
    result: any;
    code: string | undefined;
    des: string | undefined;
  }>;

  const logoutResult = await logout;
  console.log(logoutResult);
  // Delete the 'auth_token' cookie to log the user out
  deleteCookie(event, "auth_token", { path: "/" });

  return {
    message: "Logged out successfully",
  };
});
