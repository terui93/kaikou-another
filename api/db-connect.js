const { Client } = require('pg')
require('dotenv').config()

const url = process.env.DB_URL

const getComments = function(res, page) {
    const client = new Client({
        connectionString: url,
        ssl: {
          rejectUnauthorized: false
        }
    });
    let sql = '';

    sql += 'SELECT '
    sql += ' id '
    sql += ' , name '
    sql += ' , comment '
    sql += 'FROM comments '
    sql += 'WHERE 1=1 '
    sql += '  AND status = $1 '
    sql += '  AND page = $2 '

    const query = {
        text: sql,
        values: ['1', page]
    }

    client.connect().then(() => {
        client.query(query).then((res2) => {
            res.json({comments: res2.rows})
        }).catch((e) => {
            console.error(e.stack)
        }).finally(() => {
            client.end();
        })
    });
}

const setComments = function(res, name, comment, page) {
    const client = new Client({
        connectionString: url,
        ssl: {
          rejectUnauthorized: false
        }
    });

    let sql = '';

    sql += 'INSERT INTO comments ( '
    sql += ' name '
    sql += ' , comment '
    sql += ' , timestamp '
    sql += ' , status '
    sql += ' , page '
    sql += ' ) VALUES ( '
    sql += ' $1 '
    sql += ' , $2 '
    sql += ' , now() '
    sql += ' , $3 '
    sql += ' , $4 '
    sql += ' ) '

    const query = {
        text: sql,
        values: [name, comment, '1', page]
    }
    client.connect().then(() => {
        client.query(query).then((res2) => {
        }).catch((e) => {
            console.error(e.stack)
        }).finally(() => {
            client.end();
        })
    });
}

module.exports = {
    getComments: getComments,
    setComments: setComments,
}