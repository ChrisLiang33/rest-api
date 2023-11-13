async function handler(req: Request) {
  const url = req.url;
  const fileContent = await Deno.readTextFile("storage.json");
  console.log(fileContent);
  const json = JSON.parse(fileContent);
  console.log(json);

  json.logs.push(url);

  const newJson = JSON.stringify(json);
  Deno.writeTextFile("storage.json", newJson);

  return new Response("text files");
}

Deno.serve(handler);
