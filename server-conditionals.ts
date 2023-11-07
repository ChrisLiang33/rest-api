async function handler(req: Request) {
  const url = new URL(req.url);
  if (url.pathname === "/meow") {
    return new Response("meowmeow");
  } else {
    return new Response("not found");
  }
}

Deno.serve(handler);
