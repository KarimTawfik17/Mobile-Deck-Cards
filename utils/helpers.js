export function generateID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function formatDecks(decksObj) {
  const decksArr = Object.keys(decksObj).map((id) => {
    return {
      id,
      title: decksObj[id].title,
      questions: decksObj[id].questions,
      timeStamp: decksObj[id].timeStamp,
    };
  });
  return decksArr.sort((a, b) => b.timeStamp - a.timeStamp);
}
