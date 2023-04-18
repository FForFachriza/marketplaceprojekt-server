import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "User Tidak Login" });
  }
  const users_uuid = req.session.userId;
  const users = await prisma.users.findUnique({
    where: {
      users_uuid: users_uuid,
    },
  });
  if (!users) {
    return res.status(404).json({ message: "User not found" });
  }

  req.userId = users.users_uuid;
  req.userRole = users.users_role;
  console.log(req.session.userId);
  next();
};

export const verifyRole = async (req, res, next) => {
  const users_uuid = req.session.userId;

  const users = await prisma.users.findUnique({
    where: {
      users_uuid: users_uuid,
    },
  });
  if (users.users_role !== "ADMIN") {
    return res.status(401).json({ message: "User Tidak Memiliki Hak Akses" });
  }
  next();
};
