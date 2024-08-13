import { smtpCodesList } from '$shared';

export function load({ params }) {
  const codesData = smtpCodesList;
  return codesData;

}
