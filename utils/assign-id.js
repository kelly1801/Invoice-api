export const generateId = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let idA = "";
  let idB = "";
  for (let i = 0; i < 2; i++) {
    idA += letters.charAt(Math.floor(Math.random() * 26));
  }
  for (let i = 0; i < 4; i++) {
    idB += numbers.charAt(Math.floor(Math.random() * 10));
  }
  return idA + idB;
};
