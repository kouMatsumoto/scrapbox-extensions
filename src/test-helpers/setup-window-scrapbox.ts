import { ScrapboxLine, RawScrapbox } from '../libs/scrapbox/types';

export type SetupWindowScrapboxOption = {
  layout?: RawScrapbox['Layout'];
  pageTitle?: string;
  projectName?: string;
  pageLines?: ScrapboxLine[];
};

const empty: () => void = () => {
  // do nothing
};

export const setupWindowScrapbox = (option: SetupWindowScrapboxOption = {}) => {
  window.scrapbox = {
    Layout: option.layout ? option.layout : 'page',
    Page: {
      title: option.pageTitle ? option.pageTitle : '',
      lines: option.pageLines ? option.pageLines : [],
    },
    PageMenu: {
      addItem: empty,
      addMenu: empty,
      addSeparator: empty,
      removeAllItems: empty,
    },
    PopupMenu: {
      addButton: empty,
    },
    Project: { name: option.projectName ? option.projectName : '', pages: [] },
    TimeStamp: {
      addFormat: empty,
      removeAllFormats: empty,
    },
  };
};
