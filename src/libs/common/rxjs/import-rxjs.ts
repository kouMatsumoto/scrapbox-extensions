import { loadScript } from '../load-scripts/load-scripts';
import { RxJS } from './index';

export const importRxJS = () =>
  new Promise<RxJS>(async (resolve, reject) => {
    if (window.rxjs) {
      resolve(window.rxjs);
    }

    try {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/rxjs/7.0.0-alpha.0/rxjs.umd.min.js');
      // window.rxjs is set by above
      resolve(window.rxjs);
    } catch (e) {
      reject(e);
    }
  });