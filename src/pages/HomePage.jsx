import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import ListCard from '../components/ListCard';
import usePosts from '../hooks/usePosts';
import ImageSlider from '../components/Slider';

const MainContainer = styled.main`
  max-width: 1080px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Tab = styled.button`
  font-size: 20px;
  margin: 0 10px;
  padding: 10px;
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => (props.$active ? '2px solid #FE9F4D' : 'none')};
  color: ${(props) => (props.$active ? '#FE9F4D' : '#000')};

  &:focus {
    outline: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ImageSliderWrapper = styled.div`
  width: 1080px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  margin: 0 10px;
`;

const HomePage = () => {
  const navigate = useNavigate();
  const goToPostWritingPage = () => navigate('/write');
  const [activeTab, setActiveTab] = useState('popular');

  const images = [
    'public/images/image1.jpg',
    'public/images/image2.jpg',
    'public/images/image3.jpg',
  ];

  const renderCards = () => {
    const { posts } = usePosts();
    if (!posts) return null;

    switch (activeTab) {
      case 'popular':
        const sortedPostsByPopular = [...posts].sort(
          (a, b) => b.total_likes - a.total_likes
        );
        return sortedPostsByPopular.map((post) => (
          <ListCard key={post.id} post={post} />
        ));
      case 'latest':
        const sortedPostsByDate = [...posts].sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        return sortedPostsByDate.map((post) => (
          <ListCard key={post.id} post={post} />
        ));
      case 'favorites':
        return posts.map((post) => <ListCard key={post.id} post={post} />);
      default:
        return null;
    }
  };

  return (
    <MainContainer>
      <div>
        <ImageSliderWrapper>
          <ImageSlider images={images} />
        </ImageSliderWrapper>
        <HeaderWrapper>
          <Tabs>
            <Tab
              $active={activeTab === 'popular'}
              onClick={() => setActiveTab('popular')}
            >
              인기순
            </Tab>
            <Tab
              $active={activeTab === 'latest'}
              onClick={() => setActiveTab('latest')}
            >
              최신순
            </Tab>
            <Tab
              $active={activeTab === 'favorites'}
              onClick={() => setActiveTab('favorites')}
            >
              내가 찜한 목록
            </Tab>
          </Tabs>
          <ButtonWrapper>
            <Button color="#FE9F4D" size="small" onClick={goToPostWritingPage}>
              레시피 작성
            </Button>
          </ButtonWrapper>
        </HeaderWrapper>
      </div>
      {renderCards()}
    </MainContainer>
  );
};

export default HomePage;
