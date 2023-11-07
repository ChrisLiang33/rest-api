async function handler(req: Request) {
  const url = new URL(req.url);
  const htmlFile = await Deno.open("./home.html");
  const imagePattern = new URLPattern({
    pathname: ".jpeg",
  });

  if (imagePattern.test(url)) {
    const imageFile = await Deno.open("./image1.jpeg");
    return new Response(imageFile.readable);
  }

  return new Response(htmlFile.readable);
}

Deno.serve(handler);
