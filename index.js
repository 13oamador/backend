'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
		.then(()=>{
			console.log("Conectado satisfactoriamente");

			//Creacion del servidor
			app.listen(port, ()=>{
				console.log("Servidor creado y corriendo");
			});
		})
		.catch(err => console.log(err));
