export default function fetchData(text: string, setData: any) {
  const token = import.meta.env.VITE_TOKEN_API || undefined;

  if (!token) {
    console.error("TOKEN_API is not defined in environment variables");
    throw new Error("TOKEN is not defined");
  }

  let myHeaders = new Headers();
  myHeaders.append("X-API-KEY", token);
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      q: text,
    }),
    redirect: "follow",
  } as any;

  fetch("https://google.serper.dev/search", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      setData(result);
    })
    .catch((error) => console.log("error", error));
}
