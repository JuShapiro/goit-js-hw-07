const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },

];

const list = document.querySelector(".gallery")

const markup = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="360" height="300" /></li>`).join("");

list.insertAdjacentHTML("beforeend", markup)


// const list = document.querySelector(".gallery");
// console.log(list);

// images.forEach(img =>{
//     const item = document.createElement("li");
//     list.appendChild(item);

//     const image = document.createElement("img");
//     image.src = img.url;
//     image.alt = img.alt;
//     image.width = 360;
//     image.height = 300;
//     item.appendChild(image);
// });
 

