import { useState, useMemo } from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business",
    category: "Technology Insights",
    image: "https://picsum.photos/600/300?random=1",
    excerpt: "Explore how AI is transforming industries and driving innovation.",
    link: "https://www.forbes.com/sites/forbestechcouncil/2023/01/01/the-future-of-ai-in-business/",
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices",
    category: "Best Practices",
    image: "https://picsum.photos/600/300?random=2",
    excerpt: "Protect your business from cyber threats with these essential tips.",
    link: "https://www.csoonline.com/article/3237670/the-top-10-cybersecurity-best-practices.html",
  },
  {
    id: 3,
    title: "Our Latest Partnership with TechCorp",
    category: "Company News",
    image: "https://picsum.photos/600/300?random=3",
    excerpt: "We're excited to announce our new collaboration with TechCorp!",
    link: "https://techcorp.com/news/latest-partnership",
  },
  {
    id: 4,
    title: "Our Latest Partnership with TechCorp",
    category: "Company News",
    image: "https://picsum.photos/600/300?random=3",
    excerpt: "We're excited to announce our new collaboration with TechCorp!",
    link: "https://techcorp.com/news/latest-partnership",
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = useMemo(
    () => blogPosts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase())),
    [searchTerm]
  );

  return (
    <div className="blog-container">
      <h1 className="blog-header">Latest Articles</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search articles..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search blog posts"
        />
      </div>

      <div className="blog-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-category">{post.category}</p>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={post.link} className="read-more" target="_blank" rel="noopener noreferrer">
                  Read More →
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No matching articles found.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
