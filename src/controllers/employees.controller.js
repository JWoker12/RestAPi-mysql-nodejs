import { pool } from '../db.js'


export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json([rows])
    } catch (err) {
        return res.status(500).send(err)
    }
    
}

export const createEmployee = async (req, res) => {
    
    try {
        const { name, salary } = req.body
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
        res.send(`Created Employee ${rows.insertId} Success`)
    } catch (err) {
        return res.status(500).send(err)
    }
}

export const getEmployee = async (req, res) => {
    
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
        rows[0] ? res.json([rows[0]]) : res.status(404).json({message: 'Employee not Fount'})
    } catch (err) {
        return res.status(500).send(err)
    }
}

export const updateEmployee = async (req, res) => {
    try {
        const { name, salary } = req.body
        const { id } = req.params
        const [result] = await pool.query('UPDATE FROM employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [id, name, salary])
        result.affectedRows > 0 ? res.json('Employee Updated Successfully') : res.status(404).json({message: 'Employee not Fount'})
    } catch (err) {
        return res.status(500).send(err)
    }
    
}

export const deleteEmployee = async (req, res)  => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
        result.affectedRows > 0 ? res.send('Employee Deleted Successfully') : res.status(404).json({message: 'Employee not Fount'})
    } catch (err) {
        return res.status(500).send(err)
    }
}