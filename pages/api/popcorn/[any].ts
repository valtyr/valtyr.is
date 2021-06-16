import {
  createProxyMiddleware,
  responseInterceptor,
} from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'https://github.com/valtyr/popcorn/releases/latest/download/',
  changeOrigin: true,
  logLevel: 'debug',
  followRedirects: true,
  pathRewrite: { '^/api/popcorn': '' },
  onError: (err: Error) => console.error(err),
  selfHandleResponse: true,
  onProxyRes: responseInterceptor(
    async (responseBuffer, proxyRes, req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Content-Type', 'text/html');

      return responseBuffer; // manipulate response and return the result
    },
  ),
});

export const config = {
  api: {
    bodyParser: false, // enable POST requests
    externalResolver: true, // hide warning message
  },
};
