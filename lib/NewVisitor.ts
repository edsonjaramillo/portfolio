import cookie from 'js-cookie';
import emailjs from 'emailjs-com';

export class NewVisitor {
  constructor() {}

  private getToday = (): string => {
    const eventDate = new Date();
    const dateOptions: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'America/Chicago',
      weekday: 'long',
    };

    return eventDate.toLocaleDateString('en-US', dateOptions);
  };

  private checkCookie = (): boolean => {
    const cookieExists = cookie.get('visitor');
    if (cookieExists) {
      return true;
    }
    cookie.set('visitor', 'true', { expires: 5 });
    return false;
  };

  sendEmail = async (): Promise<void> => {
    const hasCookie = this.checkCookie();
    if (hasCookie) {
      return;
    }

    const templateParameters = {
      date: this.getToday(),
    };

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_NEW_VISITOR_ID as string,
      templateParameters,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
    );
  };
}
