exports.callback = (req, res, next) => {
    console.log('inside callback method');
    console.log(req.query);
}