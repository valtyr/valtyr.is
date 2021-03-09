import ReactGA from 'react-ga';

export enum Category {
  LinkClicked = 'Link Clicked',
}

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-105022154-1');
};
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
export const logEvent = (category: Category, action: string) => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
