export const date_convert = (d1, d2) => {
  
  let a = new Date(d1);
  let b = new Date(d2);

  d1 = a.toLocaleString('en-GB', { timeZone: 'UTC' })
  d2 = b.toLocaleString('en-GB', { timeZone: 'UTC' })

  return {d1,d2}
};
