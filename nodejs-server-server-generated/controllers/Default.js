'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.sesionesGET = function sesionesGET (req, res, next, date, film, version) {
  Default.sesionesGET(date, film, version)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sesionesIdDELETE = function sesionesIdDELETE (req, res, next, id) {
  Default.sesionesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sesionesIdGET = function sesionesIdGET (req, res, next, id) {
  Default.sesionesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sesionesIdPUT = function sesionesIdPUT (req, res, next, body, id) {
  Default.sesionesIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sesionesIdReservarPOST = function sesionesIdReservarPOST (req, res, next, body, id) {
  Default.sesionesIdReservarPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sesionesPOST = function sesionesPOST (req, res, next, body) {
  Default.sesionesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
