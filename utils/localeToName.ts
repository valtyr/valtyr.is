const localeToName = (locale: string) => {
  switch (locale) {
    case 'is':
      return 'IS';
    case 'en-US':
      return 'EN';
  }
};

export default localeToName;
