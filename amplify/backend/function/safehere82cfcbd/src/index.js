const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();

app.use(bodyParser.json({ type: 'application/json' }));

app.post('/', async (req, res) => {
    const { signature, payload } = req.body;

    const userId = payload.split('__')[0];

    const user = await getUserFromDatabaseByUserId(userId);

    if (!user) {
        throw new Error('Something went wrong during your Face ID authentication.');
    }

    // this is the public key that was saved earlier
    const { publicKey } = user;

    const verifier = crypto.createVerify('RSA-SHA256');
    verifier.update(payload);

    const isVerified = verifier.verify(
        `-----BEGIN PUBLIC KEY-----\n${publicKey}\n-----END PUBLIC KEY-----`,
        signature,
        'base64',
    );

    if (!isVerified) {
        return res.status(400).json({
            status: 'failed',
            message: 'Unfortunetely we could not verify your Face ID authentication',
        });
    }

    return res.status(200).json({
        status: 'success',
    });
});