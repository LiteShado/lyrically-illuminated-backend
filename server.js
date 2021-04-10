const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)

app.use (express.json())
app.use(require('cors')())

app.listen (port, () => {
    console.log(`Listening on port ${port}`)
routesReport.print()
})
