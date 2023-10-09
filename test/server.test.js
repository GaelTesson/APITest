import app from '../server'
import request from 'supertest'
import dotenv from 'dotenv'
dotenv.config()
import userModel from '../Models/userModels'

const API_KEY = process.env.API_KEY

/* ========== SERVER TEST ========== */
describe('Testing the server status', () => {
	it('should return a 200 status code', async () => {
		const response = await request(app).get('/api/v1/')
		expect(response.statusCode).toBe(200)
	})
})

/* ========== USER ROUTES ========== */
describe('Testing users routes', () => {
	const testUser = {
		first_name: 'Super',
		last_name: 'Test',
        email: 'supertest@mail.com',
		birthdate: '01/01/1970',
        street: 'Jest Road',
        city: 'Jest City',
        zipcode: 12345,
		phone: '0123456789',
		password: 'password',
		role: 'test'
	}
	// Create an user and return his ID to test the routes
	const getUserId = async () => {
		const response = await request(app).post('/api/v1/users')
		.send(testUser)
		.set({ token: API_KEY })
		return response.body._id
	}

	it('should return all users', async () => {
		const response = await request(app).get('/api/v1/users')
		.set({ token: API_KEY })
		expect(response.statusCode).toBe(200)
		expect(response.type).toBe('application/json')
	})

	it('should create an user', async () => {
		const response = await request(app).post('/api/v1/users')
		.send(testUser)
		.set({ token: API_KEY })
		expect(response.statusCode).toBe(201) 
		expect(response.type).toBe('application/json')
	})

	it('should return an user', async () => {
		const response = await request(app).get(`/api/v1/users/${await getUserId()}`)
		.set({ token: API_KEY })
		expect(response.statusCode).toBe(200)
		expect(response.type).toBe('application/json')
	})

	it('should return an user', async () => {
		const response = await request(app).get(`/api/v1/users/${await getUserId()}`)
		.set({ token: API_KEY })
		expect(response.statusCode).toBe(200)
		expect(response.type).toBe('application/json')
	})

	it('should update an user', async () => {
		const response = await request(app).put(`/api/v1/users/${await getUserId()}`)
		.send({
			first_name: 'SuperTest',
			last_name: 'Jest'
		})
		.set({ token: API_KEY })
		expect(response.statusCode).toBe(200)
		expect(response.type).toBe('application/json')
	})

	it('should delete an user', async () => {
		const response = await request(app).delete(`/api/v1/users/${await getUserId()}`)
		.set({ token: API_KEY })
		expect(response.statusCode).toBe(200)
		expect(response.text).toBe('User deleted') 
	})

	afterAll(() => userModel.deleteMany({ role: 'test' }))
})
	
