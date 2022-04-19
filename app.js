console.clear();

// ****************************************************************
// Regex para validar contrseña con 1 letra mayuscula,
// una letra minuscula,un numero y un caracter
// ****************************************************************
const validPass = "Aa3.";
const invalidPass = "aaa3.,";

function isValidPass(pass) {
  const patronRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%.,*?&])[A-Za-z\d$@$!%*?&][^'\s]/;
  return patronRegEx.test(pass);
}

console.log("password valida", isValidPass(validPass));
console.log("password no valida", isValidPass(invalidPass));

// ****************************************************************
// Funcion valida rango
// ****************************************************************

const validAge = 50;
const invalidAge = 71;
const min = 15;
const max = 70;

function isValidRange(min, max, val) {
  if (val < min || val > max) {
    return false;
  }
  return true;
}

console.log("edad valida", isValidRange(min, max, validAge));
console.log("edad no valida", isValidRange(min, max, invalidAge));

// ****************************************************************
// Regex valida que entrada sea solo numeros
// ****************************************************************

function isInterger(val) {
  const patronRegEx = /^[0-9]+$/;
  return patronRegEx.test(val);
}

console.log("solo numeros valido", isInterger(25));
console.log("solo numeros no valido", isInterger("aa"));
console.log("solo numeros no valido 2", isInterger("..#"));

// ****************************************************************
// Regex valida que entrada con decinal sea solo separado por punto y no coma
// contenga digito antes del punto y solo dos dígitos despues del punto
// (string porque es lo que se obtiene desde input web)
// ****************************************************************

function numberWith2Dec(val) {
  const patronRegEx = /^\d+\.\d{2,2}$/;
  return patronRegEx.test(val);
}

console.log("separador punto valido", numberWith2Dec("1.83"));
console.log("separador punto no valido", numberWith2Dec(".83"));
console.log("separador punto no valido 2", numberWith2Dec("1,83"));

// ****************************************************************
// Regex valida que entrada sea solo letras
// no numeros y no caracteres
// ****************************************************************

const validText = "hola mundo";
const invalidText = "hola mundo!!!";
const invalidText2 = "hol4 mund0 00";

function isLetter(text) {
  const patronRegEx = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
  return patronRegEx.test(text);
}

console.log("solo letras valido", isLetter(validText));
console.log("solo letras no valido", isLetter(invalidText));
console.log("solo letras no valido 2", isLetter(invalidText2));

// ****************************************************************
// Regex valida formato fecha DD/MM/YYYY
// ****************************************************************

const validFormatDate = "30/11/2021";
const invalidFormatDate = "30-11-2021";
const invalidFormatDate2 = "11/30/2021";

function isValidFormatDate(date) {
  const patronRegEx = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
  return patronRegEx.test(date);
}

console.log("fecha valida", isValidFormatDate(validFormatDate));
console.log("fecha no valida", isValidFormatDate(invalidFormatDate));
console.log("fecha no valida 2", isValidFormatDate(invalidFormatDate2));

// ****************************************************************
// Regex valida formato hora formato HH:MM
// ****************************************************************

const validTime = "23:59";
const invalidTime = "59:23";
const invalidTime2 = "5A:B3";

function isValidFormatTime(time) {
  const patronRegEx = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return patronRegEx.test(time);
}

console.log("hora valida", isValidFormatTime(validTime));
console.log("hora no valida", isValidFormatTime(invalidTime));
console.log("hora no valida 2", isValidFormatTime(invalidTime2));

// ****************************************************************
// Regex valida formato hora formato HH:MM
// ****************************************************************

const validEmail = "correo@correo.com";
const invalidEmail = "correo@correo";
const invalidEmail2 = "correo_correo.com";

function isValidEmail(email) {
  const patronRegEx = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return patronRegEx.test(email);
}

console.log("email valido", isValidEmail(validEmail));
console.log("email no valido", isValidEmail(invalidEmail));
console.log("email no vlaido 2", isValidEmail(invalidEmail2));
