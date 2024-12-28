"use server";
import prisma from "@/lib/db";
import * as bcrypt from "bcrypt";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return {
        message: "User not found",
        status: 400,
      };
    }

    const passwordMatch = await bcrypt.compare(password, user?.password);

    if (!passwordMatch) {
      return {
        message: "Invalid password",
        status: 400,
      };
    }

    return {
      message: "User logged in successfully",
      data: {
        id: user.id,
        email: user.email,
      },
    };
  } catch (error) {
    console.log({ error });
  }
}

export async function register({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    console.log({ user, hashedPassword, email, password });

    if (!user) {
      return {
        message: "User not created",
        status: 400,
      };
    }
    return {
      message: "User created successfully",
      data: user,
    };
  } catch (error) {
    console.log({ error });
  }
}
