import supabase from '../src/db';

export default function handler( /** @type {import('@vercel/node').VercelRequest}*/ req, /** @type {import('@vercel/node').VercelResponse}*/ res) {
    if (req.method === 'GET') {
        res.status(200).send('Hello World!');
    } else if (req.method === 'POST') {
        try {
            var content = Buffer.from(JSON.stringify(req.body), 'utf8').toString('base64');
            res.json((await supabase.from('logs').insert([{
                content
            }])));
        } catch (error) {
            res.json(error.message);
        }
    } else {
        res.status(200).send('what');
    }
}