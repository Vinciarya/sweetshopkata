import pool from '../config/database';

export const createSweetTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS sweets (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      price DECIMAL(10,2),
      quantity INTEGER,
      category VARCHAR(50)
    );
  `;
    try {
        await pool.query(query);
        console.log('Sweets table created successfully');
    } catch (error) {
        console.error('Error creating sweets table:', error);
    }
};
