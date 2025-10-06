export default defineEventHandler(async (event) => {

  const body = await readBody(event);
  // console.log(body);
  const data = await $fetch(
    "https://fontapi.bigbarter.net/getofferordermember",
    {
      method: "POST",
      body: {
        pagination: {
          perPage: 1000,
          currentPage: 1,
          totalReccord: 0,
        },
        memberId: body.memberId,
        categoryId: 0,
      },
      headers: {
        "Content-Type": "application/json",
        prefix: "BB",
      },
    }
  );

  return data;
});
