 const conn = require('../configurations/db');

 

 
 exports.insert = (req, res, next) => {

    const {firstname} = req.body
    const {lastname} = req.body
    const {email} = req.body
    const {phone} = req.body

    try {
        // var param = req.body;
        var sql = `INSERT INTO users (firstname, lastname, email, phone) VALUE('${firstname}', '${lastname}', '${email}', '${phone}');`
        console.log(sql)

        if(firstname == '' || firstname == null || firstname == undefined) {
            res.status(200).json({'message': 'Please fill your first name' })
        } else if(lastname == '' || lastname == null || lastname == undefined) {
            res.status(200).json({'message': 'Please fill your last name' })
        } else if(email == '' || email == null || email == undefined) {
            res.status(200).json({'message': 'Please fill your email' })
        } else if(phone == '' || phone == null || phone == undefined) {
            res.status(200).json({'message': 'Please fill your phone' })
        
        } else {
            conn.query(sql, (err, data) => {
                if (err) {
                    // throw new SyntaxError(err);
                    res.status(404).json({'data': "Error!!!!" });
                } else {
                    res.status(200).json({'data': data });
                }
            });
        }
       
    } catch (err) {
        res.status(400).json({'data': err.message });
    }
}

