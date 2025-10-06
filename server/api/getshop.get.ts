export default defineEventHandler(async (event) => {
  const data = [
    {
      id: "bmw",
      name: "BMW",
      image: "/bmw.png",
      favourite: true,
    },
    {
      id: "mazda",
      name: "Mazda",
      image: "/mazda.png",
      favourite: false,
    },
    {
      id:"honda",
      name: "Honda",
      image: "/honda.png",
      favourite: true,
    },
    {
      id:"hp",
      name: "HP",
      image: "/hp.png",
      favourite: true,
    },
    {
      id:"dell",
      name: "Dell",
      image: "/dell.png",
      favourite: false,
    },
    {
      id:"acer",
      name: "Acer",
      image: "/acer.png",
      favourite: false,
    },
    {
      id:"sony",
      name: "Sony",
      image: "/sony.png",
      favourite: true,
    },
    {
      id:"samsung",
      name: "Samsung",
      image: "/samsung.png",
      favourite: false,
    },
    {
      id:"toshiba",
      name: "Toshiba",
      image: "/toshiba.png",
      favourite: false,
    }
  ];
  return data;
});
