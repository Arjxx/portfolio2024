import React, { useState } from 'react';
import { Container, Grid, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import Viewer from 'react-images-viewer';


npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install react-images-viewer


body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f0f2f5;
  }
  
  .App {
    text-align: center;
  }
  
  .filter {
    margin: 20px;
  }
  
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .image {
    margin: 10px;
    cursor: pointer;
  }
  
  .image img {
    max-width: 200px;
    max-height: 200px;
    object-fit: cover;
  }
  
  .preview-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .preview-box .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
  
  .preview-box .content {
    position: relative;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    z-index: 1001;
    text-align: center;
  }
  
  .preview-box .content img {
    max-width: 90vw;
    max-height: 90vh;
  }
  
  .preview-box .content .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
  }
  

const images = [
  { id: 1, src: 'img/portfolio/2972660 copy-min.jpg', category: 'bag' },
  { id: 2, src: 'img/portfolio/christmas-min.jpg', category: 'shoe' },
  { id: 3, src: 'img/portfolio/onamfest-min.jpg', category: 'bag' },
  { id: 4, src: 'img/portfolio/dbtp1.jpg', category: 'bag' },
  { id: 5, src: 'img/portfolio/dbtp2.jpg', category: 'bag' },
  { id: 6, src: 'img/portfolio/instagram-min.jpg', category: 'shoe' },
  { id: 7, src: 'img/portfolio/KS billboard-min.jpg', category: 'shoe' },
  { id: 8, src: 'img/portfolio/muthoot flyer -min.jpg', category: 'bag' },
  { id: 9, src: 'img/portfolio/shoe1.jpg', category: 'bag' },
  { id: 10, src: 'img/portfolio/martian.jpg', category: 'watch' },
  { id: 11, src: 'img/portfolio/jalamarmaram.jpg', category: 'bag' },
  { id: 12, src: 'img/portfolio/LOGOS.jpg', category: 'watch' },
  { id: 13, src: 'img/portfolio/cat illustration.jpeg', category: 'watch' },
  { id: 14, src: 'img/portfolio/Timesup.jpg', category: 'shoe' },
  { id: 15, src: 'img/portfolio/lush.jpg', category: 'bag' },
  { id: 16, src: 'img/portfolio/lush2.jpg', category: 'bag' },
  { id: 17, src: 'img/portfolio/merry.jpg', category: 'watch' },
  { id: 18, src: 'img/portfolio/dance-illustration.jpg', category: 'watch' },
  { id: 19, src: 'img/portfolio/cowin.jpg', category: 'bag' },
  { id: 20, src: 'img/portfolio/ali.jpg', category: 'bag' },
  { id: 21, src: 'img/portfolio/carwash-min.PNG', category: 'bag' },
  { id: 22, src: 'img/portfolio/Curio.jpg', category: 'shoe' },
  { id: 23, src: 'img/portfolio/instagram2.jpg', category: 'shoe' },
  { id: 24, src: 'img/portfolio/dpharm.jpg', category: 'shoe' },
  { id: 25, src: 'img/portfolio/tiger.jpg', category: 'watch' },
  { id: 26, src: 'img/portfolio/budda-min.PNG', category: 'shoe' },
  { id: 27, src: 'img/portfolio/groovadd.jpg', category: 'shoe' },
  { id: 28, src: 'img/portfolio/budda2.jpg', category: 'shoe' },
  { id: 29, src: 'img/portfolio/moto ad.jpg', category: 'shoe' },
  { id: 30, src: 'img/portfolio/Menucover.jpeg', category: 'bag' },
];

const categories = ['all', 'bag', 'shoe', 'watch'];

const FilterButton = styled(Button)(({ theme, active }) => ({
  margin: theme.spacing(1),
  backgroundColor: active ? theme.palette.primary.main : theme.palette.secondary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const ImageBox = styled(Box)({
  cursor: 'pointer',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: 'auto',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const filteredImages = selectedCategory === 'all' ? images : images.filter((image) => image.category === selectedCategory);

  return (
    <Container>
      <Box textAlign="center" my={4}>
        {categories.map((category) => (
          <FilterButton key={category} active={selectedCategory === category} onClick={() => setSelectedCategory(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterButton>
        ))}
      </Box>
      <Grid container spacing={2}>
        {filteredImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <ImageBox onClick={() => openLightbox(index)}>
              <img src={image.src} alt="" />
            </ImageBox>
          </Grid>
        ))}
      </Grid>
      <Viewer
        isOpen={viewerIsOpen}
        onClose={closeLightbox}
        onClickPrev={() => setCurrentImage((currentImage - 1 + filteredImages.length) % filteredImages.length)}
        onClickNext={() => setCurrentImage((currentImage + 1) % filteredImages.length)}
        currentImage={currentImage}
        images={filteredImages.map((img) => ({ src: img.src }))}
      />
    </Container>
  );
}

export default App;
