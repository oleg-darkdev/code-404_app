import { httpCodesList } from '$shared';

export function load({ params }) {
  const codesData = httpCodesList;
  return codesData;

}
