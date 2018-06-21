export function isAdmin(req, res, next) {
  // if (req.isAuthenticated() && req.user) {
  //   if (req.user.admin) {
  //     return next();
  //   }
  // }
  // res.redirect('/login');
  
  // Pass through for now but auth later

  return next();
}