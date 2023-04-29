export interface articleI {
  title: string;
  date: string;
  duration: string;
  introduction: string;
  image: string;
  placeholder: string;
  tags: string[];
  link: string;
}
export interface propsI {
  nav: string[];
  articles: articleI[];
  tags: string[];
}
