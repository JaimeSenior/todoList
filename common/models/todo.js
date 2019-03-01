'use strict';

module.exports = function(Todo) {

/**
 * Este metodo muestra los eventos del usuario autenticado pendientes de realizacion
 * @param {Function(Error)} callback
 */

   Todo.beforeRemote('create', function(ctx, Todo, next) {
  if(ctx.req.accessToken) {
    next();
  } else {
    next(new Error('Usted no está logeado'))
  }
});

module.exports = function(Todo) {
  Todo.beforeRemote('create', function(ctx, user, next) {
  
      var currentDate = new Date();
      var fechaActual = ctx.args.data.date;
      console.log(ctx.args.data.date);

      var response;
      if (fechaActual < currentDate) {
        response = 'No es posible generar un evento pasado';
      } 
      cb(null, response);
  });
};

Todo.prototype.eventosPendientes = function(ctx,callback) {

  var titulo=ctx.args.data.title;
  var descripcion=ctx.args.data.description;
  var fecha=ctx.args.data.date;
  var complete=ctx.args.data.isComplete;
  var id=ctx.args.data.id;
  var usuarioId=ctx.args.data.usuarioId;

  callback(null,titulo,descripcion,fecha,complete,id,usuarioId);
};

};
