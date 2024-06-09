// Sample data to simulate database entries
const clothes = [
  {
    id: 1,
    name: "T Shirt",
    description: "A comfortable cotton t-shirt.",
    price: 19.99,
    imageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20230703/zEjF/64a2f7b8eebac147fc48acfc/-473Wx593H-466325670-purple-MODEL.jpg",
  },
  {
    id: 2,
    name: "Full Shirt",
    description: "A comfortable cotton t-shirt.",
    price: 19.99,
    imageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20230602/IpOI/6479567d42f9e729d7110cfa/-473Wx593H-462103471-red-MODEL.jpg",
  },
  {
    id: 3,
    name: "Half Shirt",
    description: "A comfortable cotton t-shirt.",
    price: 19.99,
    imageUrl:
      "https://www.jiomart.com/images/product/original/rvylaii1ic/18-_024_denim-shirt-men-s-denim-cutaway-collar-slim-fit-half-sleeve-casual-shirt-black-x-large-product-images-rvylaii1ic-0-202303110701.jpg?im=Resize=(500,630)",
  },
  {
    id: 4,
    name: "Black Shirt",
    description: "A comfortable cotton t-shirt.",
    price: 19.99,
    imageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20230614/oWSa/6489eb2c42f9e729d7430243/-473Wx593H-469514981-black-MODEL.jpg",
  },
  {
    id: 5,
    name: "White Shirt",
    description: "A comfortable cotton t-shirt.",
    price: 19.99,
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/x/5/o/m-men-slim-fit-solid-mandarin-collar-casual-shirt-mildin-original-imagh73y283erdhn.jpeg?q=90&crop=false",
  },
  {
    id: 6,
    name: "Jeans",
    description: "Stylish denim jeans.",
    price: 49.99,
    imageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20230901/jPf9/64f1f6f7afa4cf41f59d54fd/-473Wx593H-469537893-darkindigo-MODEL.jpg",
  },

  {
    id: 7,
    name: "Shocks",
    description: "Warm winter Shocks.",
    price: 39.99,
    imageUrl:
      "https://socksoho.com/cdn/shop/products/5_1_905f6f45-574b-4784-ab02-3ce6270e8ca9_1024x.jpg?v=1638253746",
  },
  {
    id: 8,
    name: "Black Shocks",
    description: "Warm winter Shocks.",
    price: 39.99,
    imageUrl:
      "https://socksoho.com/cdn/shop/products/Untitleddesign-131-2_800x.jpg?v=1621513082",
  },
  {
    id: 9,
    name: "White Shocks",
    description: "Warm winter Shocks.",
    price: 39.99,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKXd9xKCemGPZkG5W6RSCbl4Mf2RLgYRJSw&s",
  },
  {
    id: 10,
    name: "Black Jeans",
    description: "Crazy Black.",
    price: 49.99,
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2021/12/FG/QW/WG/122789331/mens-denim-black-jeans-500x500.jpg",
  },
  {
    id: 11,
    name: "Blue Jeans",
    description: "Crazy Blue.",
    price: 29.99,
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/d/v/w/42-pluscfjeanp-001-lblue-urbano-plus-original-imagpvfugpzkgfas.jpeg?q=90&crop=false",
  },
  {
    id: 12,
    name: "Shorts",
    description: "Comfortable summer shorts.",
    price: 29.99,
    imageUrl:
      "https://i.etsystatic.com/13008011/r/il/8f8cc9/2002212026/il_570xN.2002212026_ekgd.jpg",
  },

  {
    id: 13,
    name: "Lower",
    description: "Comfortable summer Lower.",
    price: 29.99,
    imageUrl:
      "https://www.jiomart.com/images/product/original/rvy3z2heuj/tee-town-trending-color-block-lower-track-pants-joggers-pajama-for-mens-black-product-images-rvy3z2heuj-0-202210190445.jpg?im=Resize=(500,630)",
  },
  {
    id: 14,
    name: "Track Pant",
    description: "Comfortable summer Track Pant.",
    price: 29.99,
    imageUrl: "https://m.media-amazon.com/images/I/71Rld9hjK0L._AC_UY1100_.jpg",
  },
  // Add more items as needed
];

// Function to render clothes
function renderClothes(clothes) {
  const clothesList = document.getElementById("clothesList");
  clothesList.innerHTML = "";

  clothes.forEach((item) => {
    const clothesItem = document.createElement("div");
    clothesItem.className = "col-md-3 mb-4";
    clothesItem.innerHTML = `
      <div class="card">
        <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <p class="card-text font-weight-bold">$${item.price}</p>
        </div>
      </div>
    `;
    clothesList.appendChild(clothesItem);
  });
}

// Fuse.js options
const fuseOptions = {
  keys: ["name", "description"],
  threshold: 0.3,
};

// Create the Fuse instance
const fuse = new Fuse(clothes, fuseOptions);

// Function to handle search input
function handleSearch(event) {
  const query = event.target.value.toLowerCase();
  if (query.length > 3) {
    const result = fuse.search(query);
    const filteredClothes = result.map((r) => r.item);
    renderClothes(filteredClothes);
  } else {
    renderClothes([]);
  }
}

// Event listener for search input
document.getElementById("searchInput").addEventListener("input", handleSearch);

// Initial render
renderClothes([]);
