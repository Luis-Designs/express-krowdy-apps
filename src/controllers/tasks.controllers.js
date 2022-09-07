import { pool } from "../db.js";

export const getNames = async (req, res) => {
    try {
        const [result] = await pool.query(
            "select * from express order by id asc"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createName = async (req, res) => {
    try {
        const { Nombre } = req.query;
        const [result] = await pool.query(
            "insert into express(name) values (?)",
            [Nombre]
        );
        res.json({
            id: result.insertId,
            name: Nombre
        });
    } catch (error) {
        return res.status(500).json({ sms: error.message });
    }
};