import swal from "sweetalert";

const _url = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

const _filterObject = (values) => {
  const array = Object.entries(values).filter(([_, value]) => value);
  return array.reduce((acc, [key, value]) => {
    acc[key] = Number(value) ? Number(value) : value;
    return acc;
  }, {});
};

const tryAgain = (values, response) => {
  swal(
    "Oops, something went wrong!",
    `Unfortunately, you got an error number ${response.status}`,
    "error",
    {
      buttons: {
        again: "Try again",
        cancel: true,
      },
    }
  ).then((value) => {
    if (value === "again") {
      onSubmit(values);
    }
  });
};

export default async function onSubmit(values) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_filterObject(values)),
  };

  const response = await fetch(_url, options);
  if (response.ok) {
    const data = await response.json();
    swal(
      "Your data was send to the server!",
      "In order to continue click OK",
      "success"
    );
    console.log(data);
    return data;
  }

  return response.text().then(() => {
    tryAgain(values, response);
  });
}
