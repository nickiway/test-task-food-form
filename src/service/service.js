import swal from "sweetalert";

const _url = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";
export let serverResponse = {};

// function to check if input is in DOM
const _isInputInDOM = (fieldName) => {
  const fieldElement = document.getElementsByName(fieldName)[0];
  return !!fieldElement;
};

// function to fileter values object from empty values
const _filterObject = (values) => {
  const array = Object.entries(values).filter(([key, _]) => _isInputInDOM(key));

  return array.reduce((acc, [key, value]) => {
    acc[key] = Number(value) ? Number(value) : value;
    return acc;
  }, {});
};

// function to try again
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

// function to send data to the server
const onSubmit = async (values) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_filterObject(values)),
  };

  const response = await fetch(_url, options);

  // case when response is ok
  if (response.ok) {
    const data = await response.json();
    swal(
      "Your data was send to the server!",
      "In order to continue click OK",
      "success"
    );

    // To check the response from the server
    serverResponse = data;
    console.log(serverResponse);
  }

  // case when response is not ok
  return response.text().then(() => {
    tryAgain(values, response);
  });
};

export default onSubmit;
