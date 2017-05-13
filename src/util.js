export function getOrdinalForDayOfMonth(d) {
  let ordinal = '';
  if(d>3 && d<21) ordinal = 'th';
  switch (d % 10) {
        case 1:  ordinal = 'st';
        case 2:  ordinal = 'nd';
        case 3:  ordinal = 'rd';
        default: ordinal = 'th';
  }
  return d + ordinal;
}
