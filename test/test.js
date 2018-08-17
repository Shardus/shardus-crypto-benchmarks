require('chai').should()
const expect = require('Chai').expect
const cryptoSphincs = require('shardus-sphincs');
const cryptoUtils = require('ulc-crypto-utils')

cryptoUtils('64f152869ca2d473e4ba64ab53f49ccdb2edae22da192c126850970e788af347');
cryptoSphincs('64f152869ca2d473e4ba64ab53f49ccdb2edae22da192c126850970e788af347');

const times = 1000
const originalObj = {
  a: 1,
  b: 2,
}
describe('UC2-Crypto-Utils and Shardus-Sphincs Benchmark', async function() {
  describe('UC2-Crypto-Utils Benchmark', async function () {
    let keyPairArray = []
    let signedObjs = []
    let timerId = null
    it('Generate 1000 keyPairs', function () {
      this.timeout(100000)
      for (let i = 0; i < times; i++) {
        const keyPair = cryptoUtils.generateKeypair()
        keyPairArray.push(keyPair)
      }
      expect(true).to.be.equal(true)
    })
    it('Sign 1000 Objects', function () {
      this.timeout(1000000)
      for (i = 0; i < times; i++) {
        const obj = { ...originalObj }
        cryptoUtils.signObj(obj, keyPairArray[i].secretKey, keyPairArray[i].publicKey)
        signedObjs.push(obj)
      }
      expect(true).to.be.equal(true)
    })
    it('Verify 1000 Objects', function () {
      this.timeout(100000)
      for (i = 0; i < times; i++) {
        const valid = cryptoUtils.verifyObj(signedObjs[i])
        expect(valid).to.be.equal(true)
      }
    })
  })
  describe('Shardus-Sphincs Benchmark', async function () {
    let keyPairArray = []
    let signedObjs = []
    let timerId = null
    it('Generate 1000 keyPairs', async function () {
      this.timeout(100000)
      for (let i = 0; i < times; i++) {
        const keyPair = await cryptoSphincs.generateKeypair()
        keyPairArray.push(keyPair)
      }
      expect(true).to.be.equal(true)
    })
    it('Sign 1000 Objects', async function () {
      this.timeout(1000000)
      for (i = 0; i < times; i++) {
        const obj = { ...originalObj }
        await cryptoSphincs.signObj(obj, keyPairArray[i].secretKey, keyPairArray[i].publicKey)
        signedObjs.push(obj)
      }
      expect(true).to.be.equal(true)
    })
    it('Verify 1000 Objects', async function () {
      this.timeout(100000)
      for (i = 0; i < times; i++) {
        const valid = await cryptoSphincs.verifyObj(signedObjs[i])
        expect(valid).to.be.equal(true)
      }
    })
  })
})
