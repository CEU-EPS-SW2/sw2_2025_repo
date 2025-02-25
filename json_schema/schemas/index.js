const Ajv2020 = require("ajv/dist/2020"); 
const ajv = new Ajv2020();

const schema_person = require("./person.schema.json")
const schema_coordinate = require("./coordinate.schema.json");
const schema_pelicula = require("./pelicula.schema.json");

ajv.addSchema(schema_person, "person") 
ajv.addSchema(schema_coordinate, "coordinate");
ajv.addSchema(schema_pelicula, "pelicula");

module.exports = ajv;