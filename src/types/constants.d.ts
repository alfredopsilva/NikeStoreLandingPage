// Define interfaces for your objects
interface NavLink {
  href: string;
  label: string;
}

interface Shoe {
  thumbnail: string;
  bigShoe: string;
}

interface Statistic {
  value: string;
  label: string;
}

interface Product {
  imgURL: string;
  name: string;
  price: string;
}

interface Service {
  imgURL: string;
  label: string;
  subtext: string;
}

interface Review {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

interface FooterLink {
  title: string;
  links: Array<{ name: string; link: string }>;
}

interface SocialMedia {
  src: string;
  alt: string;
}

// Export the types of the constants
export declare const navLinks: NavLink[];
export declare const shoes: Shoe[];
export declare const statistics: Statistic[];
export declare const products: Product[];
export declare const services: Service[];
export declare const reviews: Review[];
export declare const footerLinks: FooterLink[];
export declare const socialMedia: SocialMedia[];
