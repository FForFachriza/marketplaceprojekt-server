import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCategories = async (req, res) => {
  try {
    const categories = await prisma.categories.findMany({
      include: {
        Products: true,
      },
    });
    if (!categories) {
      return res.status(500).json({ message: "Categories Not Found" });
    }
    res.status(200).json({ message: "success", data: categories });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const getCategoriesById = async (req, res) => {
  const categories_uuid = req.params.id;
  try {
    const categories = await prisma.categories.findUnique({
      where: {
        categories_uuid: categories_uuid,
      },
      include: {
        Products: true,
      },
    });
    if (!categories) {
      return res.status(500).json({ message: "Categories Not Found" });
    }
    res.status(200).json({ message: "success", data: categories });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const addCategories = async (req, res) => {
  const { categories_name } = req.body;
  try {
    const categories = await prisma.categories.create({
      data: {
        categories_name: categories_name,
      },
    });
    if (!categories) {
      return res.status(500).json({ message: "Categories Not Found" });
    }
    res.status(200).json({ message: "Berhasil Add Category", data: categories });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const deleteCategories = async (req, res) => {
  const categories_uuid = req.params.id;
  try {
    const categories = await prisma.categories.delete({
      where: {
        categories_uuid: categories_uuid,
      },
    });
    if (!categories) {
      return res.status(500).json({ message: "Categories Not Found" });
    }
    res.status(200).json({ message: "Berhasil Delete Category", data: categories });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const editCategories = async (req, res) => {
  const categories_uuid = req.params.id;
  const { categories_name } = req.body;
  try {
    const categories = await prisma.categories.update({
      where: {
        categories_uuid: categories_uuid,
      },
      include: {
        Products: true,
      },
      data: {
        categories_name: categories_name,
      },
    });
    if (!categories) {
      return res.status(500).json({ message: "Categories Not Found" });
    }
    res.status(200).json({ message: "Berhasil Edit Category", data: categories });
  } catch (error) {}
};
