export const cookieExtractor = (req) => {
  try {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies.token;
    }
    return token;
  } catch (error) {
    console.error("Error extracting cookie:", error);
    return null;
  }
};
