const nameSurnamePatter = (name) => {
  const isValid = name?.match(
    /^\s*[a-zA-Z-\u00C0-\u017F\u0400-\u04FF]{2,}(?:\s+[a-zA-Z-\u00C0-\u017F\u0400-\u04FF]{2,})*\s*$/
  );
  const errorMessage = 'Ingresa un nombre válido';

  return isValid ? { isValid: true } : { isValid: false, errorMessage };
};
export default nameSurnamePatter;
