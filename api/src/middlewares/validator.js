function validator(schema, type) {

  return (req, res, next) => {
    const data = getReqData(type, req);
    const result = schema.validate(data);

    const hasError = result.error;
    if(!hasError) return next();

    const error = result.error.details[0].message;
    res.status(400).json(error)
  }
}

function getReqData(type, req) {
  if(type === 'query') return req.query;
  if(type === 'headers') return req.headers;
  if(type === 'params') return req.params;
  return req.body;
}

module.exports = validator;