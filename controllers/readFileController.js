const fs = require('fs');
const path = require('path');

const sendArray = (req, res) => {
  const { array, generation, xSize, ySize } = req.body;

  if (!array || !generation) return res.status(401).json({"message": "bad request"});
  let string = `Generation ${generation}:\n`;
  string += '\n';
  string += `${ySize} ${xSize}`;
  string += '\n\n';
  console.log(array)
  for (const arrays of array) {
    for (let values of arrays) {
      if (values === 0) {
        values = '.';
        string+=values;
      } else {
        values = '*';
        string+=values;
      }

    }
    string+='\n';
  }
  
  fs.writeFileSync(path.join(__dirname, '../', 'textinputs', 'input.txt'), string)

  const outPutFile = fs.readFileSync(
    path.join(__dirname, '../', 'textinputs', 'input.txt'),
    'utf8'
  );

  const oldArray = outPutFile.split('\n').splice(4)
  let newArray = [];
  oldArray.forEach(values => {
    const singleArray = values.slice(0, xSize).split('');
    if (singleArray.length > 0) {
      /* singleArray.map() */
      newArray.push(singleArray.map(x => {
        if (x === '*') {
          return 1;
        } else {
          return 0;
        }
      }))
    }
  })

  res.send(newArray);
}


module.exports = { sendArray }