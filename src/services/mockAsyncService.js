const dataBaseItems = [
  {
    id: 1,
    title: "Otome Game no Hametsu Flag",
    image: require("../img/mangas/isekai/hamefura.jpg"),
    genre: "isekai",
    price: 1200,
  },
  {
    id: 2,
    title: "Mushoku Tensei",
    image: require ("../img/mangas/isekai/mushoku.jpg"),
    genre: "isekai",
    price: 1200,
  },
  {
    id: 3,
    title: "Re:Zero",
    image: require ("../img/mangas/isekai/rezero.jpg"),
    genre: "isekai",
    price: 1200,
  },
  {
    id: 4,
    title: "Tensei Shitara Slime Datta Ken",
    image: require ("../img/mangas/isekai/slime.jpg"),
    genre: "isekai",
    price: 1200,
  },
  {
    id: 5,
    title: "Berserk",
    image: require ("../img/mangas/seinen/berserk.jpg"),
    genre: "seinen",
    price: 1200,
  },
  {
    id: 6,
    title: "Death Note",
    image: require ("../img/mangas/seinen/deathNote.jpg"),
    genre: "seinen",
    price: 1200,
  },
  {
    id: 7,
    title: "Gantz",
    image: require ("../img/mangas/seinen/gantz.jpg"),
    genre: "seinen",
    price: 1200,
  },
  {
    id: 8,
    title: "Steins:Gate",
    image: require ("../img/mangas/seinen/steins.jpg"),
    genre: "seinen",
    price: 1200,
  },
  {
    id: 9,
    title: "Ao Haru Ride",
    image: require ("../img/mangas/shoujo/aoharu.jpg"),
    genre: "shoujo",
    price: 1200,
  },
  {
    id: 10,
    title: "Horimiya",
    image: require ("../img/mangas/shoujo/horimiya.jpg"),
    genre: "shoujo",
    price: 1200,
  },
  {
    id: 11,
    title: "Kimi ni Todoke",
    image: require ("../img/mangas/shoujo/kimini.jpg"),
    genre: "shoujo",
    price: 1200,
  },
  {
    id: 12,
    title: "Vanitas no Carte",
    image: require ("../img/mangas/shoujo/vanitas.jpg"),
    genre: "shoujo",
    price: 1200,
  },
  {
    id: 13,
    title: "Bleach",
    image: require ("../img/mangas/shounen/Bleach.jpg"),
    genre: "shounen",
    price: 1200,
  },
  {
    id: 14,
    title: "Hunter x Hunter",
    image: require ("../img/mangas/shounen/hxh.jpg"),
    genre: "shounen",
    price: 1200,
  },
  {
    id: 15,
    title: "Kimetsu no Yaiba",
    image: require ("../img/mangas/shounen/kimetsu.jpg"),
    genre: "shounen",
    price: 1200,
  },
  {
    id: 16,
    title: "One Piece",
    image: require ("../img/mangas/shounen/onePiece.jpg"),
    genre: "shounen",
    price: 1200,
  },
];

function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataBaseItems);
    }, 1000);
  });
}
export default getItems;


export function getSingleItem(itemid) {

  let itemReq = dataBaseItems.find(item => {
    console.log(item, itemid)
    return item.id === parseInt(itemid)
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (itemReq !== undefined)
       resolve(itemReq);
      else 
       reject ("Item no encontrado en la base de datos")
    }, 200);
  });
}


 
export function getItemsByCategory(categoryid){
  
  let itemsCat = dataBaseItems.filter( (item) =>
  item.genre === categoryid
  )
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(itemsCat);
  }, 200);
  });
}
