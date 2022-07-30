import React from 'react';

import { bannerContent, logotypesList, benefits } from 'content';
import { Banner } from 'components/Banner';
import { ImagesList } from 'components/ImagesList';
import { IconList } from 'components/IconList';
import { Section } from 'components/Section';

function MainPage() {
  return (
    <>
      <Banner
        title={bannerContent.title}
        subtitle={bannerContent.subtitle}
        buttons={bannerContent.buttons}
        img={bannerContent.image}
      />

      <Section>
        <ImagesList images={logotypesList} />
      </Section>

      <Section>
        <IconList items={benefits} />
      </Section>
    </>
  );
}

export default MainPage;
