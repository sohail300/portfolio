import express from 'express'
import { chat } from "./controllers/chat";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log('Healthy Server')
    return res.status(200).json('Healthy Server');
})

app.get('/api/chat', chat)

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})