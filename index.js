const f_s = require("fs");

f_s.readFileSync("path", (err, data) => {
	console.log(data);
})