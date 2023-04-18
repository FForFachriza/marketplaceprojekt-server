import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCategories = async (req, res) => {
  try {
    const categories = await prisma.categories.findMany({
        include:{
            Products:true,
        }
    });
    res.status(200).json({ message: "success", data: categories });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};
