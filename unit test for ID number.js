const validateInput = require('../src/validateInput');

describe("Validate 13-Digit Number Input", () => {
  it("should return true for a valid 13-digit number", () => {
    expect(validateInput.isThirteenDigitNumber("1234567890123")).toBe(true);
    expect(validateInput.isThirteenDigitNumber("0000000000001")).toBe(true);
  });

  it("should return false for inputs that are not 13 digits", () => {
    expect(validateInput.isThirteenDigitNumber("123456789012")).toBe(false); // 12 digits
    expect(validateInput.isThirteenDigitNumber("12345678901234")).toBe(false); // 14 digits
    expect(validateInput.isThirteenDigitNumber("")).toBe(false); // Empty string
  });

  it("should return false for inputs containing non-digit characters", () => {
    expect(validateInput.isThirteenDigitNumber("12345678901a3")).toBe(false); // Contains a letter
    expect(validateInput.isThirteenDigitNumber("12345-6789013")).toBe(false); // Contains a special character
    expect(validateInput.isThirteenDigitNumber("12345 6789013")).toBe(false); // Contains a space
  });

  it("should return false for inputs that are not strings", () => {
    expect(validateInput.isThirteenDigitNumber(1234567890123)).toBe(false); // Number type
    expect(validateInput.isThirteenDigitNumber(null)).toBe(false); // Null
    expect(validateInput.isThirteenDigitNumber(undefined)).toBe(false); // Undefined
    expect(validateInput.isThirteenDigitNumber({})).toBe(false); // Object
  });
});

describe("check yy-mm-dd format", () => {
    it("should return true for a valid day (dd <= 31)", () => {
        const validateInput = {
            isValidDate: (input) => {
                // Extract the day (dd) part
                const day = parseInt(input.substring(4, 6), 10); // `substring(4, 6)` gets the dd part
                return day <= 31;
            }
        };

        expect(validateInput.isValidDate("5612310000000")).toBe(true); // Valid (dd = 31)
        expect(validateInput.isValidDate("5600320000000")).toBe(false); // Invalid (dd = 32)
        expect(validateInput.isValidDate("5600000000000")).toBe(false); // Invalid (dd = 00)
    });


    it("The date for the month of February must be less than 29 days", () => {
        const validateInput = {
            isValidDayForFeb: (input) => {
                const maande = parseInt(input.substring(2, 4), 10); // Extract month (mm)
                const date = parseInt(input.substring(4, 6), 10);   // Extract day (dd)
    
                const daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
                // Check for invalid months
                if (maande < 1 || maande > 12) {
                    return false;
                }
    
                // Check for leap year (use the first two digits for the year)
                const year = parseInt(input.substring(0, 2), 10);
                const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    
                // Special handling for February
                if (maande === 2) {
                    if (isLeapYear) {
                        return date >= 1 && date <= 29; // Leap year February
                    } else {
                        return date >= 1 && date <= 28; // Non-leap year February
                    }
                }
    
                // For all other months, validate based on max days
                return date >= 1 && date <= daysInEachMonth[maande - 1];
            },
        };
    
        // Test cases
        expect(validateInput.isValidDayForFeb("560229")).toBe(false); // Non-leap year, Feb 29 invalid
        expect(validateInput.isValidDayForFeb("560228")).toBe(true);  // Non-leap year, Feb 28 valid
        expect(validateInput.isValidDayForFeb("560131")).toBe(true);  // Valid January 31
        expect(validateInput.isValidDayForFeb("560430")).toBe(false); // Invalid April 30
    });
    
});