import express from 'express'

import handleValidationErrors from '../utils/handle-validations-error'

import { authLogin, authMe, authRegister } from '../controllers/authController'
import { isAuthed } from '../middlewares/is-authed'
import authLoginValidations from '../validations/auth/auth-login-validations'
import authRegisterValidations from '../validations/auth/auth-register-validations'

const router = express.Router()

router.post('/register', authRegisterValidations, handleValidationErrors, authRegister)

router.post('/login', authLoginValidations, handleValidationErrors, authLogin)

router.get('/me', isAuthed, authMe)

export default router
