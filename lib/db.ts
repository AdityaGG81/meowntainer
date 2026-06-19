import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "./generated/prisma/client"

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClient | undefined 
}

function createPrismaClient() {
	const url = process.env.DATABASE_URL
	if(!url) {
		throw new Error("Database_URL is not set")
	}
	
	const adapter = new PrismaPg({ connectionString: url })
	return new PrismaClient({ adapter })
}

function hasPullRequestDelegate(client: PrismaClient | undefined): client is PrismaClient {
	return typeof (client as PrismaClient | undefined)?.pullRequest?.upsert === "function"
}

const cachedPrisma = globalForPrisma.prisma
export const prisma = hasPullRequestDelegate(cachedPrisma) ? cachedPrisma : createPrismaClient()

if(process.env.NODE_ENV !== "production") {
	globalForPrisma.prisma = prisma
}