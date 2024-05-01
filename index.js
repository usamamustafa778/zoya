document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://apisitem.ecommcube.com/api/industries/65f0aa0e87406689f2ece77c/templates/661e433e5ef9ee4c88efc8b7/data/blog_list"
  )
    .then((response) => response.json())
    .then((data) => {
      displayData(data.data[0].value);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

function displayData(articles) {
  const container = document.getElementById("data-container");

  container.innerHTML = "";
  articles.forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.classList.add("article");

    const titleElement = document.createElement("h2");
    titleElement.textContent = article.title;
    articleElement.appendChild(titleElement);

    const taglineElement = document.createElement("p");
    taglineElement.textContent = article.tagline;
    articleElement.appendChild(taglineElement);

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${article.author}`;
    articleElement.appendChild(authorElement);

    const publishedAtElement = document.createElement("p");
    publishedAtElement.textContent = `Published at: ${article.published_at}`;
    articleElement.appendChild(publishedAtElement);

    const articleContentElement = document.createElement("p");
    articleContentElement.textContent = article.articleContent;
    articleElement.appendChild(articleContentElement);

    container.appendChild(articleElement);
  });
}
