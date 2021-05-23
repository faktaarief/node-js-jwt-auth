const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 8080

const corsOptions = {
  origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))

// Parse requests of content-type - application/json
app.use(express.json())

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Simple routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to My Application.' })
})

// Set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
