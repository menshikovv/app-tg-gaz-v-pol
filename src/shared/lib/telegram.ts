declare global {
    interface Window {
      Telegram: {
        WebApp: any;
      };
    }
  }

export const tg = window.Telegram.WebApp;
export const user = tg.initDataUnsafe?.user

export const initTelegram = () => {
    if(tg) {
        tg.ready()
    }
}