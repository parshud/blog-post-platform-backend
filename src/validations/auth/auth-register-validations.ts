import { body } from 'express-validator'

const authRegisterValidation = [
	body('username', 'Please provide username length from 1 to 25 symbols')
		.isString()
		.isLength({
			min: 1,
			max: 25,
		}),
	body('firstName', 'Please provide your first name').isString(),
	body('lastName', 'Please provide your last name').optional().isString(),
	body('patronymic', 'Please provide valid patronymic').optional().isString(),
	body('email', 'Please provide your email').isEmail(),
	body('password', 'Please provide password with length greater than 5 symbols')
		.isString()
		.isLength({ min: 5 }),
]

export default authRegisterValidation
