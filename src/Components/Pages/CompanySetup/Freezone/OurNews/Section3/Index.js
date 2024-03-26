import React, { useState } from 'react';
import { Container, Row, Col, Button, Pagination } from 'react-bootstrap';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 5;

  const newsData = [
    {
      image: 'https://images.hindustantimes.com/img/2022/03/17/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1647483422071.jpeg',
      title: 'News Title 1',
      description: 'News description 1',
    },
    {
      image: 'https://images.hindustantimes.com/img/2022/03/17/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1647483422071.jpeg',
      title: 'News Title 2',
      description: 'News description 2',
    },
    {
        image: 'https://images.hindustantimes.com/img/2022/03/17/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1647483422071.jpeg',
        title: 'News Title 3',
        description: 'News description 2',
      },
      {
        image: 'https://images.hindustantimes.com/img/2022/03/17/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1647483422071.jpeg',
        title: 'News Title 4',
        description: 'News description 2',
      },
      {
        image: 'https://images.hindustantimes.com/img/2022/03/17/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1647483422071.jpeg',
        title: 'News Title 5',
        description: 'News description 2',
      },
      {
        image: 'https://images.hindustantimes.com/img/2022/03/17/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1647483422071.jpeg',
        title: 'News Title 6',
        description: 'News description 2',
      },
      {
        image: 'https://images.hindustantimes.com/img/2022/03/17/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1647483422071.jpeg',
        title: 'News Title 7',
        description: 'News description 2',
      },
      {
        image: 'https://images.hindustantimes.com/img/2022/03/17/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1647483422071.jpeg',
        title: 'News Title 8',
        description: 'News description 2',
      },
    // Add more news data as needed
  ];

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      {currentNews.map((news, index) => (
        <Row key={index} className="mb-3">
          <Col md={4}>
            <img src={news.image} alt="News" className="img-fluid" />
          </Col>
          <Col md={8}>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <Button variant="primary">Learn More</Button>
          </Col>
        </Row>
      ))}
      <Row className="justify-content-center mt-3">
        <Pagination>
          {[...Array(Math.ceil(newsData.length / newsPerPage)).keys()].map((number) => (
            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Row>
    </Container>
  );
};

export default Index;
