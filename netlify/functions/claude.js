exports.handler = async function(event, context) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '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',
      'anthropic-version': '2023-06-01'
    },
    body: event.body
  });

  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
};
