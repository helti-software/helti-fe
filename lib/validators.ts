const EMAIL_MAX_LENGTH = 256
const NAME_MAX_LENGTH = 20

export const INPUTS_MAX_LENGTHS = {
  email: EMAIL_MAX_LENGTH,
  firstLastName: NAME_MAX_LENGTH,
  orgName: 40,
  position: 50,
  location: 50,
  title: 40,
  description: 500
}

export type Validator = (
  value: string,
  ...args: any
) => Promise<null | ValidatorErrorMessage> | (null | ValidatorErrorMessage)

export enum ValidatorErrorMessage {
  InvalidEmail = 'Please enter a valid email address.',
  InvalidNumber = 'Value must be a number bigger than 0.',
  Required = 'The input is required to be filled.',
  InvalidName = 'Please enter a valid name.',
  EmailTaken = 'The email address is already taken by another user.',
  InvalidPassword = 'Please enter a valid password. Password must be at least 8 characters including an uppercase letter, a number and a special character.',
  PasswordsDoNotMatch = 'Passwords do not match.',
  EmailTooLong = `The email address must not exceed 256 characters.`,
  NameTooLong = `The name must not exceed 20 characters. `
}

export const checkEmailPattern = (value: string) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  return emailPattern.test(value)
}

export const validateEmail: Validator = value => {
  if (value.length > INPUTS_MAX_LENGTHS.email) {
    return ValidatorErrorMessage.EmailTooLong
  }
  return checkEmailPattern(value) ? null : ValidatorErrorMessage.InvalidEmail
}
