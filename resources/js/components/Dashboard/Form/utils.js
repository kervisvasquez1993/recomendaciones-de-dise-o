export function extractError(errors, error) {
    if (errors && errors[error]) {
        return errors[error][0];
    }
}
