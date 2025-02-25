const ajv = require("./schemas");
const pelicula_json = require("./ejemplos/pelicula.json");

const person_json_ok = {  "firstName": "John",  "lastName": "Doe",  "age": 21} 
const person_json_error = {  "firstName": "John",  "lastName": "Other",  "age": -10} 
validateSchema(person_json_ok, "person");
validateSchema(person_json_error, "person");
validateSchema(pelicula_json, "pelicula");

function validateSchema(json, schema_name) {
    const validate = ajv.getSchema(schema_name);
    if (validate(json)) {
        console.log("JSON OK");
    } else {
        console.log("JSON NOT OK"); 
        console.log(validate.errors);
    }
}