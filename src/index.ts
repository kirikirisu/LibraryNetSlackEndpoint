import express from 'express'
// import bodyParser from 'body-parser'

const main = () => {
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }));

  app.post("/", (req, res) => {
    console.log(req.body)
  })

  app.get("/", (_, res) => {
    res.send("OK. server working!!")
  })

  app.listen(8080, () => {
    console.log('server start on port 8080');
  });
}

main()