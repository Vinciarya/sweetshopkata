import request from 'supertest';
import { app } from '../src/app';
import pool from '../src/config/database';

describe('Sweets Future Integration Tests', () => {
    let token: string;
    const testUser = {
        username: 'sweetsowner',
        password: 'password123'
    };

    beforeAll(async () => {
        // Clean up in case user exists
        await pool.query('DELETE FROM users WHERE username = $1', [testUser.username]);

        // Register
        await request(app)
            .post('/api/auth/register')
            .send(testUser);

        // Login
        const res = await request(app)
            .post('/api/auth/login')
            .send(testUser);

        token = res.body.token;
    });

    afterAll(async () => {
        await pool.query('DELETE FROM users WHERE username = $1', [testUser.username]);
        await pool.end();
    });

    it('GET /api/sweets should return 401 without token', async () => {
        const res = await request(app).get('/api/sweets');
        expect(res.status).toBe(401);
    });

    it('GET /api/sweets should return 200 and empty array with valid token', async () => {
        const res = await request(app)
            .get('/api/sweets')
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body).toHaveLength(0);
    });
});
