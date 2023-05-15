export const validatePasswordOnRepeat = (e, user, error) => {
    let { name, value } = e.target;

    const passwordErrors = { ...error };
    switch (name) {
        case "password":
            if (!value) {
                passwordErrors.password = "Please enter Password.";
            } else if (user.repeatPassword && value !== user.repeatPassword) {
                passwordErrors.repeatPassword = "Password and Confirm Password does not match.";
            } else {
                passwordErrors.repeatPassword = user.repeatPassword ? "" : error.repeatPassword;
            }
            break;

        case "repeatPassword":
            if (!value) {
                passwordErrors.repeatPassword = "Please enter Confirm Password.";
            } else if (user.repeatPassword && value !== user.password) {
                passwordErrors.repeatPassword = "Password and Confirm Password does not match.";
            }
            break;

        default:
            break;
    }
    return passwordErrors
}

export const validateForm = (user) => {
    let errors = {};
    const phoneRegex = /^[0-9\b]+$/;

    if (!user.first_name.trim()) {
        errors.first_name = "Vorname ist erforderlich.";
    }
    if (!user.last_name.trim()) {
        errors.last_name = "Nachname ist erforderlich.";
    }
    if (!user.email.trim()) {
        errors.email = "E-Mail-Adresse ist erforderlich.";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
        errors.email = "Ungültige E-Mail-Adresse.";
    }
    if (user.phone && !phoneRegex.test(user.phone)) {
        errors.phone = "Telefonnummer ist ungültig.";
    }
    if (!user.club_name.trim()) {
        errors.club_name = "club_name ist erforderlich.";
    }
    if (!user.address.trim()) {
        errors.address = "Adresse ist erforderlich.";
    }
    if (!user.zip_code.trim()) {
        errors.zip_code = "Postleitzahl ist erforderlich.";
    }
    if (!user.city.trim()) {
        errors.city = "Stadt ist erforderlich.";
    }
    if (!user.region.trim()) {
        errors.region = "Bundesstaat ist erforderlich.";
    }
    if (!user.password) {
        errors.password = "Passwort ist erforderlich.";
    }
    if (!user.repeatPassword) {
        errors.repeatPassword = "Passwortbestätigung ist erforderlich.";
    } else if (user.password !== user.repeatPassword) {
        errors.repeatPassword = "Passwörter stimmen nicht überein.";
    }
    return errors;
};