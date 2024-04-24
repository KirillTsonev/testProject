export interface IChildren {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}

export interface ISectionProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  ctaText?: string;
  backgroundUrl?: string;
  [x: string]: any;
}

export interface IGenericProps {
  [x: string]: any;
}

export interface IMockCardData {
  heading: string;
  desc: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
  background: string;
}
