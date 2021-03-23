import express from 'express'
import axios from 'axios'
// import bodyParser from 'body-parser'

const main = () => {
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }));

  app.post("/", async (req, res) => {
    const sr = JSON.parse(req.body.payload)
    const url = sr.response_url;
    console.log(sr.actions[0])

    const headers = {
      'Content-Type': 'application/json',
    }

    // ボタンをメッセージに更新する
    const data = {
      "replace_original": "true",
      "text": "ok, finish this intraction."
    }

    const { status } = await axios({
      method: 'post',
      url,
      headers,
      data
    })
    console.log("status", status)
  })

  app.get("/", (_, res) => {
    res.send("OK. server working!!")
  })

  app.listen(8080, () => {
    console.log('server start on port 8080');
  });
}

main()