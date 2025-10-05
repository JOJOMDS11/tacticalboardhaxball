// Netlify Function: proxy para Google Apps Script (evita CORS no browser)
// Recebe GET/POST/OPTIONS do frontend e repassa para o Web App do Google
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzOuK6yD2pbaWnj95cTAG8OOI9Rv58ycTTOKnRtFa0w4cpMG0-wUcUvl590BvCQVSSs/exec';

exports.handler = async function(event, context) {
  // Preflight CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400'
      },
      body: ''
    };
  }

  try {
    const method = event.httpMethod || 'GET';
    // Build URL with original query params
    const qs = event.queryStringParameters || {};
    const url = new URL(SCRIPT_URL);
    Object.keys(qs).forEach(k => url.searchParams.append(k, qs[k]));

    const fetchOptions = { method };

    if (method === 'POST') {
      // Forward body. If JSON, convert to form-encoded expected by GAS
      let body = event.body || '';
      let headers = {};
      const contentType = (event.headers && (event.headers['content-type'] || event.headers['Content-Type'])) || '';
      if (contentType.includes('application/json')) {
        try {
          const json = JSON.parse(body);
          body = new URLSearchParams(json).toString();
          headers['Content-Type'] = 'application/x-www-form-urlencoded';
        } catch (e) {
          // leave as-is
        }
      } else if (!contentType) {
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
      } else {
        headers['Content-Type'] = contentType;
      }
      fetchOptions.headers = headers;
      fetchOptions.body = body;
    }

    const resp = await fetch(url.toString(), fetchOptions);
    const text = await resp.text();

    return {
      statusCode: resp.status,
      headers: {
        'Content-Type': resp.headers.get('content-type') || 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: text
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ success: false, error: String(err) })
    };
  }
};
