'use strict';


/**
 * GET Lista de sesiones
 * GET Lista de sesiones
 *
 * date date Fecha de una sesión (optional)
 * film film Nombre de una película (optional)
 * version version Versión de una sesión (optional)
 * returns sesiones
 **/
exports.sesionesGET = function(date,film,version) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "next" : "next",
  "results" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar una sesión concreta
 * Eliminar una sesión concreta
 *
 * id id Id de una sesión o película
 * returns mensajeInformativo
 **/
exports.sesionesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ref" : "http://example.com/aeiou",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * GET de una sesión concreta
 * GET de una sesión concreta
 *
 * id id Id de una sesión o película
 * returns sesion
 **/
exports.sesionesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modificar una sesión concreta
 * Modificar una sesión concreta
 *
 * body Sesion_actualizar 
 * id id Id de una sesión o película
 * returns mensajeInformativo
 **/
exports.sesionesIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ref" : "http://example.com/aeiou",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reservar una sesión
 * Reservar una sesión
 *
 * body Compra 
 * id id Id de una sesión o película
 * returns ticket
 **/
exports.sesionesIdReservarPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crear una nueva sesión
 * Crear una nueva sesión
 *
 * body Sesion 
 * returns mensajeInformativo
 **/
exports.sesionesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ref" : "http://example.com/aeiou",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

