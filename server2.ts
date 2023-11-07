async function handler(req: Request) {
  const url = new URL(req.url);
  const registerPattern = new URLPattern({
    pathname: "/register",
  });
  const loginPattern = new URLPattern({
    pathname: "/login",
  });

  if (registerPattern.test(url)) {
    return new Response("registered");
  } else if (loginPattern.test(url)) {
    return new Response("login");
  }

  return new Response("not found", { status: 404 });
}

Deno.serve(handler);
