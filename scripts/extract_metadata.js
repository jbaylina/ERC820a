const output = require('../build/solcStandardOutput.json');
const fs = require('fs');

fs.writeFileSync('ERC820aRegistry_metadata.json', output.contracts['./contracts/ERC820aRegistry.sol'].ERC820aRegistry.metadata);
