import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const app = new Application();
const PORT = 8000;

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server is running on port ${PORT}`);

await app.listen({ port: PORT });
