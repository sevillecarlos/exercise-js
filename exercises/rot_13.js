//ROT13 is a simple Caesar cipher used to hide a text by substituting each letter
//for the letter that is thirteen places ahead in the alphabet.
export const rot13 = (message) => {
  const newMessage = message.split("");
  const newRotMessage = [];
  newMessage.forEach((x) => {
    /[a-zA-Z]/.test(x)
      ? newRotMessage.push(
          x !== x.toUpperCase()
            ? String.fromCharCode(
                x.charCodeAt(0) + 13 >= 123
                  ? x.charCodeAt(0) + 13 - 122 + 96
                  : x.charCodeAt(0) + 13
              )
            : String.fromCharCode(
                x.charCodeAt(0) + 13 >= 91
                  ? x.charCodeAt(0) + 13 - 90 + 64
                  : x.charCodeAt(0) + 13
              )
        )
      : newRotMessage.push(x);
  });

  return newRotMessage.join("");
};
