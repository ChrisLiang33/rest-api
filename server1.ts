async function handler(req: Request) {
  const url = new URL(req.url);
  // console.log(req.url);
  // console.log(url);

  // if (req.url === "http://localhost:8000/hello") {
  //   return new Response("hello");
  // }
  if (url.pathname === "/hello") {
    return new Response("hello");
  }
  return new Response("not found");
}
Deno.serve(handler);
