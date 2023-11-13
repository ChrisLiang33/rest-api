interface logsStorage {
  logs: string[];
}

const objectStorage: logsStorage = {
  logs: [],
};
const mapStorage = new Map();
mapStorage.set("logs", []);

function handler(req: Request) {
  const url = req.url;
  objectStorage.logs.push(url);
  console.log(objectStorage);

  mapStorage.set("log", [...mapStorage.get("logs"), url]);

  return new Response("hello");
}
Deno.serve(handler);
