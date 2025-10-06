export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  // console.log(body)


const param = {
  "memberId": body.memberId,
  "shopId": body.shopId,
  "categoryId": body.categoryId,
  "categorySubId": body.categorySubId,
  "productName": body.productName,
  "imgurl": body.imgurl,
  "descripttion": body.descripttion,
  "amountBB": body.amountBB,
  "amountTMC": body.amountTMC
}

const response = await $fetch('https://fontapi.bigbarter.net/saveofferordermember',{
    method: 'POST',
    body: param,
    headers: {
      'Content-Type': 'application/json',
      'prefix': 'BB'
    }
})

const result = response.data;

return result
})
