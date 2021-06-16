import Cors from 'cors';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'https://github.com/valtyr/popcorn/releases/latest/download/',
  changeOrigin: true,
  logLevel: 'debug',
  followRedirects: true,
  pathRewrite: { '^/api/popcorn': '' },
  onError: (err: Error) => console.error(err),
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const config = {
  api: {
    bodyParser: false, // enable POST requests
    externalResolver: true, // hide warning message
  },
};
