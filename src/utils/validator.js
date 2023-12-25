export class Validator {
  constructor(credentials) {
    this.credentials = credentials;
    this.message = this.message;
  }
  whiteSpaces() {
    console.log(this.credentials);
    const invalidFields = Object.keys(this.credentials).filter(
      (field) => !this.credentials[field] || this.credentials[field].trim().length === 0
    );
    if (invalidFields) {
      this.message = `Please fill in the field(s) ${invalidFields.join(', ')}`;
    }
    return invalidFields;
  }
  confirmPassword() {
    const isValid = this.credentials.password === this.credentials.confirmPassword;
    if (!isValid) {
      this.message = "Passwords don't match!";
    }
    return isValid;
  }
}

export const validator = new Validator();

export default Validator;
