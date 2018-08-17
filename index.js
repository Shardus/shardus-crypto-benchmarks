const crypto = require('shardus-sphincs');

crypto('64f152869ca2d473e4ba64ab53f49ccdb2edae22da192c126850970e788af347');

(async () => {
  const keyPair = await crypto.generateKeypair()

  // const hashMessage = crypto.hashObj("Hello World")

  console.log(keyPair)
  // console.log(hashMessage)

  const obj = {
    a: 1,
    b: 2,
  }
  await crypto.signObj(obj, keyPair.secretKey, keyPair.publicKey)
  console.log(obj)

  const valid = await crypto.verifyObj(obj)
  console.log(valid)
})();