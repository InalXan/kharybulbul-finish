import express from "express";

import router from "./router/router.js";

const server = express();
const PORT = 5000;

server.set('view engine', 'ejs');
server.use(express.static("public"));

// router 
server.use('/', router);


server.listen(PORT, () => {
	console.log(`https://localhost:${PORT} running`);
})
