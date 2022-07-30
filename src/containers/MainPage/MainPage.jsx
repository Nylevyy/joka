import React from 'react';

import { bannerContent, logotypesList } from 'content';
import { Banner } from 'components/Banner';
import { ImagesList } from 'components/ImagesList';

function MainPage() {
  return (
    <>
      <Banner
        title={bannerContent.title}
        subtitle={bannerContent.subtitle}
        buttons={bannerContent.buttons}
        img={bannerContent.image}
      />

      <ImagesList images={logotypesList} />
    </>
  );
}

export default MainPage;
