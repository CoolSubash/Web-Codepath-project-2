import { pool } from '../config/database.js' // Adjust the import path as needed

const getMovieData = async (req, res) => {
  const query = 'SELECT * FROM movie'

  try {
    const result = await pool.query(query)
    console.log(result.rows)
    res.status(200).json(result.rows) // Send the rows as JSON
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const getSingleMovieData = async (req, res) => {
  const movieId = parseInt(req.params.id)

  const query = 'SELECT * FROM movie WHERE id = $1'
  const values = [movieId]

  try {
    const result = await pool.query(query, values)

    if (result.rows.length === 1) {
      res.status(200).json(result.rows[0])
    } else {
      res.status(404).json({ error: 'Movie not found for the given ID.' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export { getMovieData, getSingleMovieData }
