export class Validator {
  constructor(credentials) {
    this.credentials = credentials;
    this.message = this.message;
  }
  whiteSpaces() {
    const invalidFields = Object.keys(this.credentials).filter(
      (field) => !this.credentials[field] || this.credentials[field].trim().length === 0
    );
    if (invalidFields) {
      this.message = invalidFields.map((field) => field.split('_').join(' ')).join(', ');
    }
    return invalidFields;
  }
}

export const validator = new Validator();

export default Validator;
