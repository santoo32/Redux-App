const logger = (param) => (store) => (next) => (action) => {
  console.log("Middleware action", action);
  //Parametro pasado
  console.log(param);
  next(action);
};

export default logger;
