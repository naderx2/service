const express =require('express');
const app=express();
const cors=require('cors');
const swaggerJSDoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');
const {createemploye,createcompagnie,createsociete}=require('./create')
const {getallcompagnies,getallemployes,getallsocietes,getemploye,getcompagnie}=require('./read')
const {updatecompagnie,updateemploye}=require('./update')
const {deletemploye,deletecompagnie,deletesociete}=require('./delete')


const swaggerOptions={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Employee compagnie API',
            version:'1.0.0',
            description:'Employe Api for employee societe',
            contact:{
                name:'Jayaramachandran Augustin',
                url:'https://whizpath.com',
                email:'jayaramachandran@whizpath.com'
            },
            servers:["http://localhost:3000"]
        }
    },
    apis:["index.js"]
}
const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));



var corsOptions={
    origin:'http://exemple.com',
    optionSuccessStatus:200

}


app.use(express.json());


/**
 * @swagger
 * definitions:
 *  Employe:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the employee
 *     example: 'Jayaramachandran'
 *    imag:
 *     type: string
 *     description: photo de profil url
 *     example: 'http://example.com/image.jpg'
 *    cv:
 *     type: string
 *     description: cv url
 *     example: 'http://example.com/file.pdf'
 *    dat-rec:
 *     type: string
 *     description: date of joining of the employe
 *     example: '2020-08-30'
 *    email:
 *     type: string
 *     description: email of the employe
 *     example: 'nader@mail.com'
 *    doc:
 *     type: string
 *     description: document of the employee
 *     example: 'http://example.com/file.pdf'
 *  compagnie:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the compagnie
 *     example: 'axon'
 *    email:
 *     type: string
 *     description: email of the team
 *     example: 'axon@whizpath.com'
 *    description:
 *     type: string
 *     description: description of the team
 *     example: ' developement java'
 *  societe:
 *   type: object
 *   properties:
 *    employe_id:
 *     type: integer
 *     description: id of the employe
 *     example: 2
 *    compagnie_id:
 *     type: integer
 *     description: id of the compagnie
 *     example: 2
 */


/**
  * @swagger
  * /employee:
  *  post:
  *   summary: create employe
  *   description: create employee for the organisation
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref:  '#/definitions/Employe'
  *   responses:
  *    200:
  *     description: employee created succesfully
  *    500:
  *     description: failure in creating employee
  */



app.post("/employee/",createemploye)

/**
 * @swagger
 * /compagnie:
 *  post:
 *   summary: create compagnie
 *   description: create compagnie
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: body of the compagnie
 *      schema:
 *       $ref: '#/definitions/compagnie'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/compagnie'
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description : error
 */

app.post("/compagnie/",createcompagnie)

/**
 * @swagger
 * /societe:
 *  post:
 *   summary: create societe
 *   description: create societe
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: employe  of the compagnie
 *      schema:
 *       $ref: '#/definitions/societe'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/societe'
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */

app.post("/societe/",createsociete)
/**
 * @swagger
 * /employees:
 *  get:
 *   summary: get all employees
 *   description: get all employees
 *   responses:
 *    200:
 *     description: success
 *    500:
 *     description: error
 */
app.get("/employees/",cors(corsOptions),getallemployes)

/**
 * @swagger
 * /compagnies:
 *  get:
 *   summary: get all compagnies
 *   description: get all compagnies
 *   responses:
 *    200:
 *     description: success
 */

app.get("/compagnies/",cors(corsOptions),getallcompagnies)

/**
 * @swagger
 * /societes:
 *  get:
 *   summary: get all societes
 *   description: get all societes
 *   responses:
 *    200:
 *     description: success
 */

app.get("/societes/",getallsocietes)

/**
 * @swagger
 * /employee/{employe_id}:
 *  get:
 *   summary: get employee
 *   description: get employee
 *   parameters:
 *    - in: path
 *      name: employe_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the employee
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */

// get 1 employe
app.get("/employee/:id",getemploye)

/**
 * @swagger
 * /compagnie/{compagnie_id}:
 *  get:
 *   summary: create compagnie
 *   description: create compagnie
 *   parameters:
 *    - in: path
 *      name: compagnie_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the compagnie
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */

// get 1 compagnie
app.get("/compagnie/:id",getcompagnie)

/**
 * @swagger
 * /employee/{id}:
 *  put:
 *   summary: update employe
 *   description: update employe
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the employee
 *      example: 2
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema:
 *       $ref: '#/definitions/Employee'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Employee'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/Team'
 */


//update employe

app.put("/employee/:id",updateemploye)

/**
 * @swagger
 * /compagnie/{id}:
 *  put:
 *   summary: update compagnie
 *   description: update compagnie
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the compagnie
 *      example: 2
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema:
 *       $ref: '#/definitions/compagnie'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/compagnie'
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/compagnie'
 */

//update compagnie

app.put("/compagnie/:id",updatecompagnie)


/**
 * @swagger
 * /employee/{employe_id}:
 *  delete:
 *   summary: delete employe
 *   description: delete employe
 *   parameters:
 *    - in: path
 *      name: employe_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the employee
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */

//delete employe

app.delete("/employee/:id",deletemploye)

/**
 * @swagger
 * /compagnie/{compagnie_id}:
 *  delete:
 *   summary: delete compagnie
 *   description: delete compagnie
 *   parameters:
 *    - in: path
 *      name: compagnie_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the compagnie
 *      example: 2
 *   responses:
 *    200:
 *     description: success
 */

//delete compagnie

app.delete("/compagnie/:id",deletecompagnie)


/**
 * @swagger
 * /societe/{employe_id}/{compagnie_id}:
 *  delete:
 *   summary: delete  societe
 *   description: delete  societe
 *   parameters:
 *    - in: path
 *      name: employe_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the employe
 *      example: 12
 *    - in: path
 *      name: compagnie_id
 *      schema:
 *       type: integer
 *      required: true
 *      description: id of the compagnie
 *      example: 12
 *   responses:
 *    200:
 *     description: success
 */

//delete societe

app.delete("/societe/:employe_id/:compagnie_id",deletesociete)


app.listen(3000,()=>{
    console.log("server listening 3000");
})
