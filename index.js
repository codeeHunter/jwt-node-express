const express = require("express");
const moongose = require("mongoose")
const PORT = process.env.PORT || 5000
const authRouter = require("./authRouter")

const app = express();

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
  try {
    await moongose.connect(`mongodb+srv://root:root@cluster0.ztlbvof.mongodb.net/?retryWrites=true&w=majority`)
    app.listen(PORT, () => console.log(`Server started in ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
