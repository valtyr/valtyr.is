import Cors from 'cors';
import type { NextApiRequest, NextApiResponse } from 'next';

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Run cors
  await cors(req, res);

  try {
    const binRequest = await fetch(
      'https://github.com/valtyr/popcorn/releases/latest/download/kernel.iso',
    );

    res.status(200);
    res.setHeader('Content-Disposition', 'attachment; filename="kernel.iso"');
    res.setHeader('Content-Type', 'application/octet-stream');
    res.send(binRequest.body);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
