async function handler(req: Request) {
  const url = new URL(req.url);

  const profilePattern = new URLPattern({
    pathname: "/profile/:username",
  });

  const postPattern = new URLPattern({
    pathname: "/post/:postId/:userId",
  });

  if (profilePattern.test(url)) {
    const matches = profilePattern.exec(url);
    const username = matches?.pathname.groups.username;
    return new Response(`hello, ${username}`);
  } else if (postPattern.test(url)) {
    const matches = postPattern.exec(url);
    const userId = matches?.pathname.groups.userId;
    const postId = matches?.pathname.groups.postId;
    return new Response(`al posts for ${userId}, ${postId}`);
  }

  return new Response("not found", { status: 400 });
}

Deno.serve(handler);
