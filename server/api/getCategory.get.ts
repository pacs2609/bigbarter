export default defineEventHandler(async (event) => {
  interface Data {
    result: [];
  }
  const param = {
  "pagination": {
    "perPage": 1000,
    "currentPage": 1,
    "totalReccord": 0
  },
  "code": "",
  "name": "",
  "useStatus": 'Y '
}
  const data = await $fetch('https://fontapi.bigbarter.net/category',
    {
      method: 'POST',
      body: param,
      headers: {
        'Content-Type': 'application/json',
        'prefix': 'BB'
      }
    }
  ) as Data;
  return data.result;
});
