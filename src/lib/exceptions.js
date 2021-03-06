export class ValidationError extends Error {
    /**
     * ValidationError to be used with multiple validation errors return from Ajv or other validators
     * @param {Object} _validationMessages dictionary of validation errors
     */
  ValidationError (_validationMessages) {
    this._messages = _validationMessages
  }

  /**
   * @return {Array} array of errors
   */
  getMessages () {
    return this._messages
  }
}

