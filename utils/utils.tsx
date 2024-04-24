export const makeBold = (text) => {
  return text.split("<strong>").map((string, i) => {
    return i === 1 ? <strong key={i}>{string}</strong> : <span key={i}>{string}</span>;
  });
};
