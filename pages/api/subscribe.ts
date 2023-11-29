
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    try {
      // https://app.brevo.com/
      await axios.post('https://api.sendinblue.com/v3/contacts', {
        email: email,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.SENDINBLUE_API_KEY,
        },
      });

      res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      res.status(500).json({ error: 'Error subscribing to newsletter' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
