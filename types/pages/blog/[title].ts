export interface dataI {
    title: string;
    date: string;
    duration: string;
    introduction:string;
    image:string;
  }
export interface articleI {
    data: dataI;
    content: string;
  }
export interface propsI {
    nav: string[];
    article: articleI;
  }