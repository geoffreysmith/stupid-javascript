export function getUserProfile(userid) {
  return {type: "GET_USER_PROFILE", userid, token};
}
