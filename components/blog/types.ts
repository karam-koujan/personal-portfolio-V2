export interface dataI {
    title: string;
    date: string;
    duration: string;
  }
export interface articleI {
    data: dataI;
    content: string;
  }
export  interface propsI {
    article: articleI;
  }


