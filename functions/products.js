const dotenv = require('dotenv')
dotenv.config()
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 })
    // ...

    const products = response.records.map((product) => {
      const { id, fields } = product
      const {
        name,
        img,
        desc,
        colors,
        sizes,
        price,
        featured,
        countInStock,
        categories,tenue,men,women,divers
      } = fields

      // Convert img to an array of URLs
      const images = Array.isArray(img) ? img.map((item) => item.url) : []

      return {
        id,
        name,
        featured,
        countInStock,
        img: images,
        desc,
        colors,
        sizes,
        price,
        categories,tenue,men,women,divers
      }
    })

    // ...

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: 'there was an error',
    }
  }
}
