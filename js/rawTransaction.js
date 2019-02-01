const ERC820aRegistry = require('../artifacts/ERC820aRegistry.json')

const rawTransaction = {
  nonce: 0,
  gasPrice: 100000000000,
  value: 0,
  data: '0x' + ERC820aRegistry.compilerOutput.evm.bytecode.object,
  gasLimit: 800000,
  v: 27,
  r: '0x8208208208208208208208208208208208208208208208208208208208208200',
  s: '0x0820820820820820820820820820820820820820820820820820820820820820'
}

module.exports = rawTransaction;
