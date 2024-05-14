import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

//since next js does a hot reload, we need to make sure that prisma is only initialized once
//global is excluded from hot reload therefore prisma can be stored in global
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
