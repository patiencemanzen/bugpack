export default class Bugpack {
    constructor() {
        this._models= {};
        this._errors = {};
    }

    defineForm(form) {
        if (typeof form === 'object' && !Array.isArray(form) && form !== null) {
            this._models = form;
            Object.keys(form).map((field) => {
                this._errors[field+"Error"] = this.objector([]);
            });
        }
    }

    alignWith(comingErrors) {
        this._errors = {};

        Object.keys(this._models).map((model) => {
            if (model in comingErrors) {
                Object.defineProperty(this, model+"Error", {
                    get: () => this._errors[model+"Error"],
                    enumerable: true
                });
                
                this._errors[model+"Error"] = comingErrors[model];
            }
        });
    }

    objector(array) {
        return {
            values: array, 
            first: () => array[0],
            all: () => array,
        }
    }

    /**
     * All created models
     *
     * @returns Object
     */
    models() {
        return this._models;
    }

    /**
     * All created errors
     *
     * @param {string} index
     * @returns Object
     */
    errors(index = null) {
        return (index != null) 
            ? this._errors[index] 
            : this._errors;
    }
}

/**
 * Listen object models and create next erros
 *
 * @param {Object} form
 * @returns Bugpack
 */
export function defineForm(form) {
    let validator = new Bugpack();
    return validator.defineForm(form);
}

/**
 * Initialize Bugpack --> short hand
 *
 * @returns Bugpack
 */
export function validator() {
    return new Bugpack();
}
