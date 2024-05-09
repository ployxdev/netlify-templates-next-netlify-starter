import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  const { name = 'stranger' } = event.queryStringParameters

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, QUERY ${name}! ${new Date(1577896200000).toLocaleString('th-TH', { dateStyle: 'long', timeStyle: 'medium' })}`,
    }),
  }
}
