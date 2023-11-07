async function handler(req: Request) {
  const url = new URL(req.url);
  if (url.pathname.match("./meow")) {
    return new Response("meowmeow");
  } else if (url.pathname.match(/\/woof/)) {
    return new Response("woofwoof");
  } else {
    return new Response("not found");
  }
}

Deno.serve(handler);
