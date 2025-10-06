export default defineEventHandler(async (event) => {
  const data = [
    {
      date: "23-10-2025",
      datalist: [
        {
          id: 1,
          invoiceNo: 240049,
          productName: "HAVIT HV-G92 Gamepad",
          quantity: 2,
          type: "BB",
          total: 2990,
          status: "W",
        },
        {
          id: 2,
          invoiceNo: 240050,
          productName: "HAVIT HV-G92 Gamepad",
          quantity: 2,
          type: "TMC",
          total: 2990,
          status: "C",
        },
        {
          id: 3,
          invoiceNo: 240051,
          productName: "HAVIT HV-G92 Gamepad",
          quantity: 2,
          type: "BB",
          total: 2990,
          status: "X",
        },
      ],
    },
    {
      date: "23-10-2025",
      datalist: [
        {
          id: 4,
          invoiceNo: 240052,
          productName: "HAVIT HV-G92 Gamepad",
          quantity: 2,
          type: "BB",
          total: 2990,
          status: "S",
        },
        {
          id: 5,
          invoiceNo: 240053,
          productName: "HAVIT HV-G92 Gamepad",
          quantity: 2,
          type: "BB",
          total: 2990,
          status: "W",
        },
        {
          id: 6,
          invoiceNo: 240054,
          productName: "HAVIT HV-G92 Gamepad",
          quantity: 2,
          type: "BB",
          total: 2990,
          status: "W",
        },
      ],
    },
  ];
  return data;
});
