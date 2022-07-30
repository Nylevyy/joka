import { ReactComponent as Logo } from 'assets/logo.svg';
import nikeJordanImg from 'assets/nike_jordan.png';
import nikeLogoImg from 'assets/nike_logo.png';
import pumaLogoImg from 'assets/puma_logo.png';
import adidasLogoImg from 'assets/adidas_logo.png';

export const headerContent = {
  navigation: [
    {
      title: 'О нас',
      href: '#about',
    },
    {
      title: 'Преймущества',
      href: '#pros',
    },
    {
      title: 'Услуги',
      href: '#services',
    },
    {
      title: 'Цены',
      href: '#prices',
    },
  ],
  navigationPinnedButtons: [
    {
      title: 'Связаться с нами',
      href: '#contact',
      theme: 'dark',
      mode: 'secondary',
    },
  ],
  logo: Logo,
};

export const bannerContent = {
  title: 'Оставайся оригинальным',
  subtitle: 'Онлайн магазин обуви и верхней одежды от известных брендов',
  buttons: [
    {
      title: 'Услуги',
      href: '#services',
    },
  ],
  image: {
    src: nikeJordanImg,
    title: 'nike jordan',
  },
};

export const logotypesList = [
  {
    src: pumaLogoImg,
    title: 'puma logo',
  },
  {
    src: nikeLogoImg,
    title: 'nike logo',
  },
  {
    src: adidasLogoImg,
    title: 'adidas logo',
  },
];

export const advantages = [
  {
    icon: {},
    title: 'Цена',
    description: '',
  },
  {
    icon: {},
    title: 'Ассортимент',
    description: 'Обширный выбор моделей различных брендов включая',
  },
  {
    icon: {},
    title: 'Качество',
    description: 'Все товары являются оригиналами, что подтверждается сертификатом и гарантией',
  },
];
