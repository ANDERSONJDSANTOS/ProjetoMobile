const crypto = require('crypto');

const algorithm = 'aes-256-ctr';

module.exports = {

  encrypt:(value, secret) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, secret, iv);
    const encrypted = Buffer.concat([cipher.update(value), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
  },
  

  decrypt:(hash, secret) => {
    const decipher = crypto.createDecipheriv(algorithm, secret, Buffer.from(hash.iv, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
    return decrpyted.toString();
  }
}