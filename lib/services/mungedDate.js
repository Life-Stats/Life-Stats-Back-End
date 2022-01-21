exports.mungedDate = ({ date }) => {
  const newDate = date;
  const splitDate = newDate.split('-'); // ex: ['2022', '11', '03']
  const d = Number(splitDate.reverse()[0]); // ex: ['01', '10', '1988']
  const m = Number(splitDate.reverse()[1]); 
  const y = Number(splitDate.reverse()[2]); 
  return { d, m, y };
};
