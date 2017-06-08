export function getOrdinalForDayOfMonth(d) {
  if(d>3 && d<21)
    return d + 'th';

  switch (d % 10) {
    case 1:   return d + 'st';
    case 2:   return d + 'nd';
    case 3:   return d + 'rd';
    default:  return d + 'th';
  }
}

export function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
