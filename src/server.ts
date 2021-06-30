//import * as express from "express";
//import express from "express";
import express, { Express } from "express";
 
const app = express();
const port = 8000;
 
app.use(express.json());
const router = express.Router();
router.get('/test', (req, res) => res.send('Hello world !'));
app.use('/', router);
 
app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});

/* Now we can see "Hello world !" at http://localhost:8000/test */