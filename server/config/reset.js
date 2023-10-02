import { pool } from './database.js'
import './dotenv.js'
import moviesData from '../data.js'

const createTableQuery = `
    DROP TABLE IF EXISTS movie;

    CREATE TABLE IF NOT EXISTS movie (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        image VARCHAR(255),
        author VARCHAR(255),
        dateOfPublication VARCHAR(50),
        summary TEXT
    )
`

async function createMovieTable() {
  try {
    await pool.query(createTableQuery)
    console.log('Table created successfully.')
  } catch (error) {
    console.error('Error creating table:', error)
  }
}

const seedMovieData = async () => {
  await createMovieTable()
  try {
    for (const movie of moviesData) {
      const { name, image, author, dateOfPublication, summary } = movie

      const insertQuery = `
        INSERT INTO movie (name, image, author, dateOfPublication, summary)
        VALUES ($1, $2, $3, $4, $5)
      `

      const values = [name, image, author, dateOfPublication, summary]

      await pool.query(insertQuery, values)
    }

    console.log('Data seeded successfully.')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seedMovieData()
