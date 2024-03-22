import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DBNAME
}).promise()


pool.getConnection()
    .then(connection => {
        console.log('connected to db successfully')
    })
    .catch(err=>{
        console.log(err)
    });


//creating a resourse
export async function createResource(){
    try{
        const result = await pool.query(`
        INSERT INTO workspace (booked)
        VALUE
        (false)
        `)
        return true
    }
    catch(err){
        console.log(err)
        return false
    }
}

//book a space
export async function bookSpace(customer, id){
    try{
        const result = await pool.query(`
        UPDATE workspace SET customer_id = ?, booked = true WHERE id = ?
        `, [customer, id])
        return true
    }catch(err){
        console.error(err);
        return false
    }
}