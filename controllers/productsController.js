import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProduct = async (req, res) => {
  try {
    const products = await prisma.products.findMany({
      include: {
        product_categories: true,
        product_status: true,
      },
    });
    res.status(200).json({ message: "success", data: products });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const getProductById = async (req, res) => {
  const products_uuid = req.params.id;
  try {
    const products = await prisma.products.findUnique({
      where: {
        products_uuid: products_uuid,
        product_status: true,
      },
    });
    if (!products) {
      return res.status(500).json({ message: "Product Not Found" });
    }
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

export const deleteProduct = async (req, res) => {
  const products_uuid = req.params.id;
  try {
    const products = await prisma.products.delete({
      where: {
        products_uuid: products_uuid,
      },
    });
    if (!products) {
      return res.status(500).json({ message: "Product Not Found" });
    }
    res.status(201).json({ message: "Berhasil Delete Product", data: products });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const editProduct = async (req, res) => {
  const products_uuid = req.params.id;

  const { products_desc, products_image, products_name, products_price, categoriesId } = req.body;
  try {
    const products = await prisma.products.update({
      where: {
        products_uuid: products_uuid,
      },
      data: {
        products_desc: products_desc,
        products_image: products_image,
        products_name: products_name,
        products_price: products_price,
        categoriesId: categoriesId,
      },
    });
    if (!products) {
      return res.status(500).json({ message: "Product Not Found" });
    }
    res.status(201).json({ message: "Berhasil Edit Product", data: products });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};
