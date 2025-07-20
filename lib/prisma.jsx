   import { PrismaClient } from '@prisma/client';
   // Avoid instantiating PrismaClient in development due to HMR
   const prisma = global.prisma || new PrismaClient();
   if (process.env.NODE_ENV === 'development') {
     global.prisma = prisma;
   }
   export default prisma;