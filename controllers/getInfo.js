 const conn = require('../configurations/db');

 

 
 exports.getInfo = (req, res, next) => {



    try {
        // var param = req.body;
        var sql = `SELECT * FROM users`;
    
        // db is global variable
        conn.query(sql, (err, data) => {
            if (err)  {  
                // throw new SyntaxError(err);
                res.status(400).json({ 'auth': true, 'data': 'Error' });
            } else {
                res.status(200).json({ 'auth': true, 'data': data });
            }
        });
    } catch (err) {
        res.status(400).json({ 'auth': false, 'data': err.message });
    }
}
