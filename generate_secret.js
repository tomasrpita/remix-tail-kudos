import crypto from 'crypto';

function generateSecret() {
  return crypto.randomBytes(32).toString('hex');
}

const secret = generateSecret();
console.log(`Tu nuevo secret es: ${secret}`);
