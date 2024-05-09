import { Handler } from '@netlify/functions'
import moment from 'moment'

export const handler: Handler = async (event, context) => {
  const URL = process.env.URL;
  const { name = 'stranger' } = event.queryStringParameters

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, GET ${name} ${URL}! ${process.env.PLOYX_KEY} ${moment().format('MMMM Do YYYY, h:mm:ss a')}`,
    }),
  }
}
