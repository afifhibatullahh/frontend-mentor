import { challenges } from "./challenges.js";

const createCard = (item) => {
  const container = document.getElementById("card-container");
  const image = `./${item.name}/design/desktop-design.jpg`;
  const repo = `https://github.com/afifhibatullahh/frontend-mentor/tree/main/${item.name}`;
  const url = `https://afifhibatullahh.github.io/frontend-mentor/${item.name}`;

  const cardHTML = `
    <li class="card">
      <div class="image">
        <img src=${image} alt=""/>
      </div>
      <div class="text">            
        <h2>
          <a href="${url}">${item.title}</a>
        </h2>          
        <small>
          <a href="${repo}">Visit Repository</a>
        </small>  
      </div>
    </li>
  `;

  container.insertAdjacentHTML("beforeend", cardHTML);
};

challenges.forEach((item) => {
  createCard(item);
});
