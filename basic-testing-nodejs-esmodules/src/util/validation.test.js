import { it, expect, describe} from 'vitest';

import {validateStringNotEmpty, validateNumber} from './validation.js';


describe('validateStringNotEmpty()', () => {
    it('should throw an error, if an empty string is provided', () => {
        const input = '';
    
        const validationFn = () => validateStringNotEmpty(input);
    
        expect(validationFn).toThrow();
    });
    
    it('should throw an error with a message that contains a reason (must not be empty)', () => {
        const input = '';
    
        const validationFn = () => validateStringNotEmpty(input);
    
        expect(validationFn).toThrow(/must not be empty/);
    });
    
    it('should not throw an error, if a non-empty string is provided', () => {
        const input = 'valid';
    
        const validationFn = () => validateStringNotEmpty(input);
    
        expect(validationFn).not.toThrow();
    });
})

describe('validateNumber()', () => {
it('should thorw an error with message (invalid number) if the value is NaN', () => {
    const input = NaN;

    const validationFn = () => validateNumber(input);

    expect(validationFn).toThrow(/Invalid number/);
});
});