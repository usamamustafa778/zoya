document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://apisitem.ecommcube.com/api/public/industry_template_data/65f0aa0e87406689f2ece77c/661e433e5ef9ee4c88efc8b7/data/blog_list"
  )
    .then((response) => response.json())
    .then((data) => {
      displayData(data.data[0].value);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  fetch(
    "https://apisitem.ecommcube.com/api/public/industry_template_data/65f0aa0e87406689f2ece77c/661e433e5ef9ee4c88efc8b7/data/banner"
  )
    .then((response) => response.json())
    .then((data) => {
      displayBanner(data.data[0]);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

function displayBanner(bannerData) {
  const container = document.getElementById("banner");
  container.innerHTML = "";

  const bannerImg = document.createElement("img");
  bannerImg.src = `https://apisitem.ecommcube.com/images/industry_template_images/661e433e5ef9ee4c88efc8b7/${bannerData.file_name}`;
  bannerImg.alt = "Background Image";
  bannerImg.setAttribute("fetchpriority", "high");
  bannerImg.setAttribute("loading", "eager");
  bannerImg.setAttribute("decoding", "async");
  bannerImg.setAttribute("data-nimg", "fill");
  bannerImg.classList.add("banner-img");
  container.appendChild(bannerImg);

  const bannerContainer = document.createElement("div");
  bannerContainer.classList.add("banner-container");

  const badge = document.createElement("div");
  badge.classList.add("badge");
  badge.textContent = bannerData?.value?.badge;
  bannerContainer.appendChild(badge);

  const title = document.createElement("h1");
  title.textContent = bannerData?.value?.title;
  bannerContainer.appendChild(title);

  const tagline = document.createElement("p");
  tagline.textContent = bannerData?.value?.tagline;
  bannerContainer.appendChild(tagline);

  container.appendChild(bannerContainer);
}

function displayData(articles) {
  const container = document.getElementById("data-container");

  container.innerHTML = "";
  articles.forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");

    const blogHead = document.createElement("div");
    blogHead.classList.add("blog-head");

    const categoryName = document.createElement("p");
    categoryName.classList.add("category-name");
    categoryName.innerHTML = `in <span class="uppercase text-yellow-600 font-medium ml-2 text-xs">${article.category}</span>`;
    blogHead.appendChild(categoryName);

    const titleElement = document.createElement("h2");
    titleElement.textContent = article.title;
    blogHead.appendChild(titleElement);

    const dateAuthor = document.createElement("p");
    dateAuthor.classList.add("date-author");
    dateAuthor.innerHTML = `By <span class="author">${article.author}</span> - <span class="date">${article.published_at}</span>`;
    blogHead.appendChild(dateAuthor);

    articleElement.appendChild(blogHead);

    const imgElement = document.createElement("img");
    imgElement.src = `https://apisitem.ecommcube.com/images/industry_template_images/661e433e5ef9ee4c88efc8b7/${article.image}`;
    imgElement.alt = "";
    imgElement.classList.add("blog-img");
    articleElement.appendChild(imgElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("blog-description");
    descriptionElement.textContent = article.articleContent;
    articleElement.appendChild(descriptionElement);

    const readMoreBtn = document.createElement("button");
    readMoreBtn.classList.add("btnPrimary", "read-more");
    readMoreBtn.textContent = "Read More";
    articleElement.appendChild(readMoreBtn);

    container.appendChild(articleElement);
  });
}
