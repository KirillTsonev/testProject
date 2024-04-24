export interface IChildren {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}

export interface IHero {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  ctaText: string;
  [x: string]: any;
}

export interface IGenericProps {
  [x: string]: any;
}