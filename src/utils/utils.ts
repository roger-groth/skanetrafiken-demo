export const getLocalizedDateStr = (date: Date, locale?: string) => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
};

export const isDate = (x: any): x is Date => x instanceof Date && !isNaN(x.getTime());
