const fileController = {};

fileController.uploadfile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ msg: 'No has subido archivos' });
    }
    const { file } = req.files;
    console.log(file.filename);

    if (!file) {
        const error = new Error('No File')
        error.httpStatusCode = 400
        return next(error)
    }
    file.mv('D:/laragon/www/node-uploadfile/src/files/' + file.name, function (err) {
        if (err)
            return res.status(500).json(err);

        res.send(file);
    });


};


module.exports = fileController;