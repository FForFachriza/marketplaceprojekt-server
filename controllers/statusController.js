import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStatus = async (req, res) => {
  try {
    const status = await prisma.status.findMany({
      include: {
        Products: true,
      },
    });
    if (!status) {
      return res.status(500).json({ message: "Status Not Found" });
    }
    res.status(200).json({ message: "success", data: status });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const getStatusById = async (req, res) => {
  const status_uuid = req.params.id;
  try {
    const status = await prisma.status.findUnique({
      where: {
        status_uuid: status_uuid,
      },
      include: {
        Products: true,
      },
    });
    if (!status) {
      return res.status(500).json({ message: "Status Not Found" });
    }
    res.status(200).json({ message: "success", data: status });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const addStatus = async (req, res) => {
  const { status_name } = req.body;
  try {
    const status = await prisma.status.create({
      data: {
        status_name: status_name,
      },
    });
    if (!status) {
      return res.status(500).json({ message: "Status Not Found" });
    }
    res.status(200).json({ message: "Berhasil Add Status", data: status });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const deleteStatus = async (req, res) => {
  const status_uuid = req.params.id;
  try {
    const status = await prisma.status.delete({
      where: {
        status_uuid: status_uuid,
      },
    });
    if (!status) {
      return res.status(500).json({ message: "Status Not Found" });
    }
    res.status(200).json({ message: "Berhasil Delete Status", data: status });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const editStatus = async (req, res) => {
  const status_uuid = req.params.id;
  const { status_name } = req.body;
  try {
    const status = await prisma.status.update({
      where: {
        status_uuid: status_uuid,
      },
      include: {
        Products: true,
      },
      data: {
        status_name: status_name,
      },
    });
    if (!status) {
      return res.status(500).json({ message: "Status Not Found" });
    }
    res.status(200).json({ message: "Berhasil Edit Status", data: status });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};
