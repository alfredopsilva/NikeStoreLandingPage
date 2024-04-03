export type Service = {
  imgURL: string;
  label: string;
  subtext: string;
};

export type Review = {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
};

export type Shoe = {
  thumbnail: string;
  bigShoe: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Link = {
  name: string;
  link: string;
};

export type FooterSection = {
  title: string;
  links: Link[];
};

export type SocialMedia = {
  src: string;
  alt: string;
};
