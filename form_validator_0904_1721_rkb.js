// 代码生成时间: 2025-09-04 17:21:20
$(document).ready(function() {

    /**
     * FormValidator class
     * Handles form validation using jQuery
     */
    class FormValidator {
        constructor(formSelector) {
            this.form = $(formSelector);
            this.errors = [];
        }

        /**
         * Validate the form using a set of validation rules
         * @param {Object} rules - Object containing validation rules
         */
        validate(rules) {
            this.errors = [];
            $.each(rules, (field, rule) => {
                this.validateField(field, rule);
            });

            return this.errors.length === 0;
        }

        /**
         * Validate a single field
         * @param {String} field - The field name to validate
         * @param {Object} rule - The validation rule for the field
         */
        validateField(field, rule) {
            const value = this.form.find(`[name="${field}"]`).val();
            if (rule.required && !value.trim()) {
                this.errors.push(`${field} is required.`);
            } else if (rule.email && !this.validateEmail(value)) {
                this.errors.push(`${field} is not a valid email.`);
            } else if (rule.minLength && value.length < rule.minLength) {
                this.errors.push(`${field} must be at least ${rule.minLength} characters long.`);
            }
            // Add more validation rules as needed
        }

        /**
         * Validate an email format
         * @param {String} email - The email to validate
         * @returns {Boolean} - True if the email is valid, false otherwise
         */
        validateEmail(email) {
            const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return re.test(email);
        }

        /**
         * Display errors to the user
         * @param {Array} errors - Array of error messages
         */
        displayErrors() {
            if (this.errors.length > 0) {
                this.form.find(".error-messages").remove();
                const errorContainer = $('<div class="error-messages"></div>');
                this.errors.forEach((error) => {
                    const errorElement = $('<p></p>').text(error);
                    errorContainer.append(errorElement);
                });
                this.form.prepend(errorContainer);
            } else {
                this.form.find(".error-messages").remove();
            }
        }
    }

    /**
     * Example usage of FormValidator
     */
    const form = new FormValidator("#myForm");

    form.form.on("submit", function(event) {
        event.preventDefault();

        const rules = {
            "email": {
                required: true,
                email: true
            },
            "username": {
                required: true,
                minLength: 3
            }
        };

        const isValid = form.validate(rules);
        if (!isValid) {
            form.displayErrors();
        } else {
            // Proceed with form submission or other actions
            console.log("Form is valid!");
        }
    });

});