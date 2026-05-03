import { getContentReadinessReport } from '../../utils/readinessReport';

export function GET() {
  return new Response(JSON.stringify(getContentReadinessReport(), null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
