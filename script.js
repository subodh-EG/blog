const blogPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Eco Link Score (ELS) | Your Business' Most Important New Metric",
    author: "Dipak",
    date: "Dec 15, 2023",
    readTime: "3 Min Read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sustainable Technology Solutions for Modern Businesses",
    author: "Sarah",
    date: "Dec 12, 2023",
    readTime: "4 Min Read",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1682431244950-f773baa67585?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Green Energy Transition: A Complete Guide for Companies",
    author: "Mike",
    date: "Dec 10, 2023",
    readTime: "5 Min Read",
  },
  {
    image:
      "https://images.unsplash.com/photo-1480944657103-7fed22359e1d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Carbon Footprint Reduction Strategies That Actually Work",
    author: "Emma",
    date: "Dec 8, 2023",
    readTime: "3 Min Read",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1663020003976-1ab067c8edb9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Renewable Energy Investment Opportunities in 2024",
    author: "John",
    date: "Dec 5, 2023",
    readTime: "6 Min Read",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661662850226-83c981ed4eba?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "",
    author: "Lisa",
    date: "Dec 3, 2023",
    readTime: "4 Min Read",
  },
  {
    image:
      "https://images.pexels.com/photos/590018/pexels-photo-590018.jpeg?auto=compress&cs=tinysrgb&w=312&h=213&fit=crop",
    title: "Environmental Impact Assessment Tools and Methods",
    author: "David",
    date: "Dec 1, 2023",
    readTime: "5 Min Read",
  },
  {
    image:
      "https://images.pexels.com/photos/590019/pexels-photo-590019.jpeg?auto=compress&cs=tinysrgb&w=312&h=213&fit=crop",
    title: "Green Building Certification: Complete Process Guide",
    author: "Anna",
    date: "Nov 28, 2023",
    readTime: "7 Min Read",
  },
];

// Additional posts for load more functionality
const additionalPosts = [
  {
    image:
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=312&h=213&fit=crop",
    title: "Climate Change Adaptation Strategies for Businesses",
    author: "Robert",
    date: "Nov 25, 2023",
    readTime: "4 Min Read",
  },
  {
    image:
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=312&h=213&fit=crop",
    title: "Circular Economy Principles in Practice",
    author: "Maria",
    date: "Nov 22, 2023",
    readTime: "5 Min Read",
  },
  {
    image:
      "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=312&h=213&fit=crop",
    title: "Water Conservation Technologies for Industries",
    author: "James",
    date: "Nov 20, 2023",
    readTime: "3 Min Read",
  },
  {
    image:
      "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=312&h=213&fit=crop",
    title: "Sustainable Packaging Solutions and Innovations",
    author: "Sophie",
    date: "Nov 18, 2023",
    readTime: "4 Min Read",
  },
];

let currentPostsDisplayed = 0;

function createBlogCard(post) {
  const title = post.title && post.title.length ? post.title : "Blog Post";
  return `
    <div class="blog-card h-100">
      <img src="${post.image}" alt="${title}" class="blog-image">
      <div class="blog-content">
        <div class="blog-meta">By <strong style="color: var(--primary-green);">${post.author}</strong></div>
        <h3 class="blog-title">${title}</h3>
        <div class="blog-info">
          <span>${post.date}</span>
          <span class="separator"></span>
          <span>${post.readTime}</span>
        </div>
      </div>
    </div>
  `;
}

function generateBlogPosts(posts) {
  const blogContainer = document.getElementById("blogPosts");
  if (!blogContainer) return;

  posts.forEach((post) => {
    const col = document.createElement("div");
    col.className = "col-md-6 mb-4";
    col.innerHTML = createBlogCard(post);
    blogContainer.appendChild(col);
  });

  currentPostsDisplayed += posts.length;
}

function setupLoadMore() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (!loadMoreBtn) return;

  loadMoreBtn.addEventListener("click", function () {
    generateBlogPosts(additionalPosts);

    const total = blogPosts.length + additionalPosts.length;
    if (currentPostsDisplayed >= total) {
      loadMoreBtn.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  generateBlogPosts(blogPosts.slice(0, 6));
  setupLoadMore();
});

function includeHTML(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.error("Error loading file:", file, error));
}
