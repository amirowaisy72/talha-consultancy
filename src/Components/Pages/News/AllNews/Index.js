import React from "react";
import "./Index.css"; // Import your CSS file for styling

const articles = [
  {
    id: 1,
    title: "A&A gets Featured Among Top 10 Corporate Business Consultants in Asia 2023 by Asia Business Outlook",
    imageUrl: "https://www.aaconsultancy.ae/wp-content/uploads/2023/03/News-banner-for-AA.png",
    description: "A&A Associate, a corporate business consultancy firm based in Dubai, has been named one of the top 10 in its field by the Asia Business Outlook.",
    link: "https://www.aaconsultancy.ae/aa-gets-featured-among-top-10-corporate-business-consultants-in-asia-2023-by-asia-business-outlook/"
  },
  {
    id: 2,
    title: "A&A Associate begins 2023 on a triumphant note with Superbrand status",
    imageUrl: "https://www.aaconsultancy.ae/wp-content/uploads/2023/03/certificate-2.jpg",
    description: "The UAE Superbrands Council has picked A&A Associate worthy of Superbrand status as the Dubai Business Setup firm continues its award-winning spree……..",
    link: "https://www.aaconsultancy.ae/aa-associate-begins-2023-on-a-triumphant-note-with-superbrand-status/"
  },
  {
    id: 3,
    title: "A&A Associate Celebrates Pink Holi!",
    imageUrl: "https://www.aaconsultancy.ae/wp-content/uploads/2023/03/holi-image1.jpg",
    description: "To mark International Women’s Day and Holi, the team of A&A Associated celebrated the “Pink Holi” event. Consisting of sweets, music colors, …….",
    link: "https://www.aaconsultancy.ae/aa-associate-celebrates-pink-holi/"
  }
];

const Index = () => {
  return (
    <div className="news-container">
      {articles.map(article => (
        <div key={article.id} className="news-item">
          <img
            src={article.imageUrl}
            alt=""
            className="news-image"
          />
          <div className="news-content">
            <h2 className="news-title">
              <a href={article.link} rel="bookmark">
                {article.title}
              </a>
            </h2>
            <p className="news-description">{article.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
