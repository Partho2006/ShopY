// lib/queries.js
export const accessoriesQuery = `
  *[_type == "product" && category == "accessory"]{
    _id,
    title,
    price,
    "imageUrl": image.asset->url,
    slug
  }
`
