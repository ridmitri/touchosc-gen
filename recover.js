const fs = require('fs')

var src = fs.readFileSync('result.xml', 'utf8');
const src_str = String(src);
const name = src_str.match(/name=\"[A-Za-z0-9+/=]*\"*/gi);


const replace = src_str.replace(/name=\"([A-Za-z0-9+/=]*)\"*/gi, (match, offset, str, str2) => {
	console.log(str2)
	var buf = new Buffer(offset).toString('base64'); // Ta-da
	return 'name="' + buf + '"';
})

console.log(replace);

fs.writeFile('index' + Date.now() + '.xml', replace);
