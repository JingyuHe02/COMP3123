//Promise

async function myAsyncFunction(a) {
  const myPromise = await new Promise((resovle, reject) => {
    if (a < 50) {
      const result = {
        status: true,
        data: "some data",
        info: "Additional info",
      };
      resovle(result.info);
    } else {
      reject("Promise reject");
    }
  })
    .then((message) => {
      console.log(message);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("Finally excuted"));

  return myPromise;
}

setTimeout(() => {
  myAsyncFunction(1000);
  myAsyncFunction(20);
}, 1000);
module.exports = myAsyncFunction;