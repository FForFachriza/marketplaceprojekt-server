import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";
const prisma = new PrismaClient();

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.users.findMany({
      select: {
        users_password: false,
        created_at: true,
        id: true,
        updated_at: true,
        users_name: true,
        users_role: true,
        users_uuid: true,
      },
    });
    res.status(200).json({ message: "success", data: users });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const getUsersById = async (req, res) => {
  const users_uuid = req.params.id;
  try {
    const users = await prisma.users.findUnique({
      where: {
        users_uuid: users_uuid,
      },
      select: {
        users_password: false,
        created_at: true,
        id: true,
        updated_at: true,
        users_name: true,
        users_role: true,
        users_uuid: true,
      },
    });
    if (!users) {
      return res.status(500).json({ message: "Users Not Found" });
    }
    res.status(200).json({ message: "success", data: users });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const addUsers = async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await argon2.hash(password);
  try {
    const users = await prisma.users.create({
      data: {
        users_name: username,
        users_password: hashedPassword,
        users_role: role,
      },
      select: {
        users_password: false,
        created_at: true,
        id: true,
        updated_at: true,
        users_name: true,
        users_role: true,
        users_uuid: true,
      },
    });
    res.status(200).json({ message: "Berhasil Add Users", data: users });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const deleteUsers = async (req, res) => {
  const users_uuid = req.params.id;
  try {
    const users = await prisma.users.delete({
      where: {
        users_uuid: users_uuid,
      },
      select: {
        users_password: false,
        created_at: true,
        id: true,
        updated_at: true,
        users_name: true,
        users_role: true,
        users_uuid: true,
      },
    });
    if (!users) {
      return res.status(500).json({ message: "Users Not Found" });
    }
    res.status(201).json({ message: "Berhasil Delete Users", data: users });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};

export const editUsers = async (req, res) => {
  const users_uuid = req.params.id;
  const { username, password, role } = req.body;
  const hashedPassword = await argon2.hash(password);
  try {
    const users = await prisma.users.update({
      where: {
        users_uuid: users_uuid,
      },
      data: {
        users_name: username,
        users_password: hashedPassword,
        users_role: role,
      },
      select: {
        users_password: false,
        created_at: true,
        id: true,
        updated_at: true,
        users_name: true,
        users_role: true,
        users_uuid: true,
      },
    });
    if (!users) {
      return res.status(500).json({ message: "Users Not Found" });
    }
    res.status(200).json({ message: "Berhasil Edit Users", data: users });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};
