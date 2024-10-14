//sert à faire appel aux données qui sont dans le .env
// const port = process.env.SERVER_PORT;
// server.listen(port);
//require("doteenv").config();
import "dotenv/config";

console.log(
	`I am ${process.env.MY_NAME} wilder in" ${process.env.MY_CITY} and I love ${process.env.MY_LANGUAGE}`,
);
