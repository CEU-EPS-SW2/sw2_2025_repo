const jestOpenAPI = require('jest-openapi').default;
const axios = require('axios').default;
const BASE_URL = "http://localhost:3000/api/v1";
const SCHEMA = "../schema/cine.schema.yaml";
const path = require('path');
const PELICULA = {
  "titulo" : "Italian Spiderman",
  "directores" : [{"nombre":"Dario", "apellidos": "Russo"}],
  "actores" : [ {
    "nombre" : "David",
    "apellidos" : "Ashby"
  }, {
    "nombre" : "Chris",
    "apellidos" : "Asimos"
  } ],
  "resumen" : "When an otherworldly substance with amazing cloning properties falls into the hands of the evil criminal mastermind, Captain Maximum, only the extreme powers of the Italian Spiderman can save the world.",
  "duracion" : 40,
  "rating": 7.9,
  "genero": ["comedia"]
};

// Load an OpenAPI file (YAML or JSON) into this plugin
jestOpenAPI(path.join(__dirname, SCHEMA));

describe('POST /peliculas', () => {
    it('should satisfy OpenAPI spec', async () => {
      const res = await axios.post(BASE_URL + '/peliculas', PELICULA);
      expect(res.status).toEqual(201);
      expect(res).toSatisfyApiSpec();
    });
});

// Write your test
describe('GET /peliculas', () => {
  it('should satisfy OpenAPI spec', async () => {
    const res = await axios.get(BASE_URL + '/peliculas');
    expect(res.status).toEqual(200);
    // Assert that the HTTP response satisfies the OpenAPI spec
    expect(res).toSatisfyApiSpec();
  });
});


