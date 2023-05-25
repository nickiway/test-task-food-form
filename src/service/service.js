const _url = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

const _filterObject = (values) => {
  const array = Object.entries(values).filter(([_, value]) => value);
  return array.reduce((acc, [key, value]) => {
    acc[key] = Number(value) ? Number(value) : value;
    return acc;
  }, {});
};

export default async function submit(values, setError) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_filterObject(values)),
    };

    const response = await fetch(_url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // setError({status: true, error.message});
  }
}
