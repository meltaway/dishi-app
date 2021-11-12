export {
  authActions,
  login,
  register,
  resetPassword,
  logout,
  refreshToken,
  socialLogin,
  socialRegister,
} from './auth/duck';

export {
  userActions,
  // profile
  getUserProfile,
  updateUserProfile,
  // update
  updateUserPhoto,
  updateUserPassword,
  checkRegistrationType,
} from './user/duck';

export {getFAQ} from './about/duck';
