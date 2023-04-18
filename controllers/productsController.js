import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProduct = async (req, res) => {
  try {
    const products = await prisma.products.findMany({
      include: {
        product_categories: true,
      },
    });
    res.status(200).json({ message: "success", data: products });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const getProductById = async (req, res) => {
  const { products_uuid } = req.body;
  try {
    const products = await prisma.products.findUnique({
      where: {
        products_uuid: products_uuid,
      },
    });
    res.status(200).json({ message: "success", data: products });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const addProduct = async (req, res) => {
  const { products_desc, products_image, products_name, products_price, categoriesId } = req.body;
  try {
    const products = await prisma.products.create({
      data: {
        products_desc: products_desc,
        products_image: products_image,
        products_name: products_name,
        products_price: products_price,
        categoriesId: categoriesId,
      },
    });
    res.status(200).json({ message: "Berhasil Add Product", data: products });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};
