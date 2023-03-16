export const GET_CHARACTERS = "GET_CHARACTERS";

export const getCharacters = () => {
  return {
    type: GET_CHARACTERS,
    payload: [
      { id: 1, name: Daniel },
      { id: 2, name: Jorge },
    ],
  };
};
