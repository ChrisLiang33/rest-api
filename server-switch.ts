async function handler(req: Request) {
  const url = new URL(req.url);
  switch (url.pathname) {
    case "/meow": {
      return new Response("meowmeow");
    }
    case "/woof": {
      return new Response("woofwoof");
    }
    default: {
      return new Response("not found");
    }
  }
}
Deno.serve(handler);
