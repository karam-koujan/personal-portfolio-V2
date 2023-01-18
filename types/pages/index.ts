export interface projectI {
    title: string;
    image: string;
    text: string;
    placeholder: string;
    link: string;
    techs: string[];
    embedLink: string;
    repo: string;
}
export interface articlesI {
    title: string;
    image: string;
    introduction: string;
    tags: string[];
    placeholder: string;
    duration: string;
    date: string;
    link: string;
  }
export  interface contactSourceI {
    link: string;
    text: string;
    email: string;
  }
export interface contactI {
    contactSource: contactSourceI;
    pragraph: string;
  }
export  interface introductionI {
    name: string;
    introduction: string;
    resume: string;
    email: string;
  }
export interface propsI {
    nav: string[];
    about: any;
    projects: projectI[];
    articles: articlesI[];
    blogLink: string;
    contact: contactI;
    introduction: introductionI;
  }