async function handeler(req: Request) {
  const file = await Deno.open("./hello.html");
  const readableStream = file.readable;
  const headers = new Headers();
  headers.set("content-type", "text/html");
  return new Response(readableStream, { headers });
}
Deno.serve({ port: 9000 }, handeler);
