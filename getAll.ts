const file = await Deno.readTextFile("./users.json");
const users = JSON.parse(file);

async function handlers(req: Request) {
  const url = new URL(req.url);
  const userRoute = new URLPattern({ pathname: "/users" });

  if (userRoute.test(url)) {
    const usersString = JSON.stringify(users);
    return new Response(usersString, {
      headers: {
        "content-type": "application/json",
      },
    });
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handlers);
