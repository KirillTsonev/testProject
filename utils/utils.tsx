export const makeBold = (text: string) => {
  //iterator won't change in this case, otherwise we would use unique id
  return text.split("<strong>").map((string, i) => {
    return i === 1 ? <strong key={i}>{string}</strong> : <span key={i}>{string}</span>;
  });
};
