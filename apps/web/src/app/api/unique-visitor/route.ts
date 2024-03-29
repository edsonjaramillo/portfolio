import { NextRequest } from 'next/server';

import { API } from 'utils/src/API';
import { EmailJS, type UniqueVisitorEmail } from 'utils/src/EmailJs';
import { ENV } from 'utils/src/env';
import { DatetimeFmt } from 'utils/src/format/DatetimeFmt';

export async function GET(req: NextRequest) {
  const geo = req.geo;
  const date = DatetimeFmt.getFullDatetime(new Date());
  const templateParams: UniqueVisitorEmail = {
    date,
    city: geo.city || 'Unknown',
    country: geo.country || 'Unknown',
    region: geo.region || 'Unknown',
  };

  const emailResponse = await EmailJS.sendEmail<UniqueVisitorEmail>(ENV.EMAILJS_NEW_VISITOR_TEMPLATE, templateParams);

  if (emailResponse.status !== 200) {
    return Response.json(API.error(emailResponse.text));
  }

  return Response.json(API.success(null, 'Application submitted successfully.'));
}
