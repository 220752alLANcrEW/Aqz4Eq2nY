// 代码生成时间: 2025-10-14 02:17:26
class DataValidator {
    constructor(options) {
        this.rules = options.rules || {};
        this.errors = [];
    }

    /**
     * Validates the given data against the rules set in the constructor.
     * @param {Object} data - The data to be validated.
     * @returns {boolean} - True if the data is valid, false otherwise.
     */
    validate(data) {
        this.errors = [];
        for (const key in this.rules) {
            const rule = this.rules[key];
            if (this.validateRule(key, data[key], rule) === false) {
                return false;
            }
        }
        return this.errors.length === 0;
    }

    /**
     * Validates a single rule against the data.
     * @param {string} key - The key of the rule.
     * @param {any} value - The value to be validated.
     * @param {Object} rule - The rule to apply.
     * @returns {boolean} - True if the value is valid, false otherwise.
     */
    validateRule(key, value, rule) {
        if (rule.required && value === undefined) {
            this.errors.push(`The ${key} is required.`);
            return false;
        }

        if (rule.type && typeof value !== rule.type) {
            this.errors.push(`The ${key} must be of type ${rule.type}.`);
            return false;
        }

        if (rule.minLength && value.length < rule.minLength) {
            this.errors.push(`The ${key} must have at least ${rule.minLength} characters.`);
            return false;
        }

        if (rule.maxLength && value.length > rule.maxLength) {
            this.errors.push(`The ${key} must have no more than ${rule.maxLength} characters.`);
            return false;
        }

        return true;
    }

    /**
     * Returns all validation errors.
     * @returns {Array} - An array of error messages.
     */
    getErrors() {
        return this.errors;
    }
}

// Example usage:
const options = {
    "rules": {
        "username": {
            "required": true,
            "type": "string",
            "minLength": 3,
            "maxLength": 20
        },
        "email": {
            "required": true,
            "type": "string"
        },
        "age": {
            "required": true,
            "type": "number"
        }
    }
};

const validator = new DataValidator(options);
const dataToValidate = {
    "username": "John",
    "email": "john@example.com",
    "age": 30
};

if (validator.validate(dataToValidate)) {
    console.log("Data is valid");
} else {
    console.log("Data is invalid", validator.getErrors());
}