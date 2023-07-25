// import cheetah from 'cheetah'
import { z } from 'zod'
import { Prisma, PrismaClient } from "./generated/client/deno/edge.ts";
import { load } from "https://deno.land/std@0.195.0/dotenv/mod.ts";
import { Hono, validator } from 'hono/mod.ts'
const app = new Hono()


const envVars = await load();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL ?? Deno.env.get("DATABASE_URL"),
    },
  },
});

const userSchema = z.object({
  name: z.string(),
})

app.post("/users/create", validator('json', (value, c) => {
    const parsed = userSchema.safeParse(value)
    if (!parsed.success) {
		console.log(value)
		return c.text('Invalid!', 401)
	}
    return parsed.data
  }) ,async (c) => {
  	const user = c.req.valid('json')

	await prisma.user.create({
		data: user
	})

	c.status(201)
	return c.json({
		message: 'User created',
	})
})

Deno.serve(app.fetch)
