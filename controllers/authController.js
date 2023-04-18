import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient();

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.users.findUnique({
      where: {
        users_name: username,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordValid = await argon2.verify(user.users_password, password);
    if (!passwordValid) {
      return res.status(401).json({ message: "Password is not valid" });
    }
    req.session.userId = user.id;
    return res.status(200).json({ message: "Login success" });
  } catch (error) {
    res.status(500).json({ message: "error", error: error.message });
  }
};
