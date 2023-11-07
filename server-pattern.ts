async function handler(req: Request) {
  const url = new URL(req.url);
  const woofPattern = new URLPattern({
    pathname: "woof",
  });
  const meowPattern = new URLPattern({
    pathname: "/meow",
  });

  if (woofPattern.test(url)) {
    return new Response("woof");
  } else {
    return new Response("none");
  }
}

Deno.serve(handler);
