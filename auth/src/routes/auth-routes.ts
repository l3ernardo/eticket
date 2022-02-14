import { currentUserRouter } from './current-user';
import { signinRouter } from './signin';
import { signoutRouter } from './signout';
import { signupRouter } from './signup';

const router = [
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter
]

export { router as authRoutes };
