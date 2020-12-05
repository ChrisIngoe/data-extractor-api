const Joi = require('joi');

exports.validatePostcode = function(req, res, next) {
    const postcode = req.params.postcode;
    const schema = Joi.string().min(5).max(8).required();
    const { error, value } = schema.validate(postcode);
    console.log(error, value);
    if (error){
        return res.status(400).send( 'Bad request' );
    } else {
        next();
    }
}


