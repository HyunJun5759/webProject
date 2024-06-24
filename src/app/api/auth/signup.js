import { z } from "zod";

export default function handler(req, res) {
  if (req.method === "POST") {
    const schema = z.object({
      id: z.string().min(5, { message: "아이디는 5자 이상으로 해주세요" }),
      password: z
        .string()
        .min(8, { message: "비밀번호는 8자 이상으로 해주세요" }),
    });

    try {
      const userAccount = schema.parse({
        id: req.body.id,
        password: req.body.password,
      });
      res.status(200).json({ message: "성공" });
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
