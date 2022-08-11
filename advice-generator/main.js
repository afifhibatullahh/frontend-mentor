const getAdvice = async () => {
  let url = `https://api.adviceslip.com/advice`;

  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const renderAdvice = async () => {
  let advice = await getAdvice();
  document.getElementById("advice").innerText = `"${advice.slip.advice}"`;
  document.getElementById("id-advice").innerText = advice.slip.id;
};

renderAdvice();
