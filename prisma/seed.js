import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const kategori = async ()=>{
//     const kategori = await prisma.categories.createMany({
//         data:{
//             categories_name: "Pakaian",
//             created_at: new Date(),
//         }

//     })
// }

// kategori()