/**
 * Constants for the application.
 * @module constants
 * @category Util
 * @subcategory constants
 */
const constants = Object.freeze({
    VALIDATE_EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    VALIDATE_PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    VALIDATE_POSTAL_CODE_REGEX: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
    VALIDATE_PHONE_NUMBER_REGEX: /^\d{10}$/,
    VALIDATE_STREET_NUMBER_REGEX: /^\d+[a-zA-Z]$/,
    VALIDATE_STREET_NAME_REGEX: /^[a-zA-Z0-9\s]+$/,
    VALIDATE_CITY_REGEX: /^[a-zA-Z\s]+$/,
    VALIDATE_PROVINCE_REGEX: /^[a-zA-Z\s]+$/,
    VALIDATE_ROLE_REGEX: /^(admin|user)$/,
});
export default constants;