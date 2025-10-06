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
  "memberId": 1
}
  const data = await $fetch('https://fontapi.bigbarter.net/member/voucher',
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
