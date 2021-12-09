import { Application, Context } from "https://deno.land/x/abc@v1.3.3/mod.ts";

const port = parseInt(Deno.env.get('PORT') ?? '8080')

const app = new Application();

//Static Files
app.static('/', './public')

console.log("http://localhost:8080/");

// Routes
app
  .get("/", async (ctx: Context) => {
    await ctx.file('/public/index.html');
  })
  .start({ port: port });