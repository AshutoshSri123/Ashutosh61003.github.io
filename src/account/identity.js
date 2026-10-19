export const ADMIN_EMAIL = "ashu.61003@gmail.com";
export function isSiteAdmin(user) {
  return !!user?.emailVerified && user.email?.toLowerCase() === ADMIN_EMAIL;
}
