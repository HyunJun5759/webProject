import crypto from "crypto";
import util from "util";

const randomBytesPromise = util.promisify(crypto.randomBytes);
const pbkdf2Promise = util.promisify(crypto.pbkdf2);

const createSalt = async () => {
  //Salt 64바이트 길이로 생성
  const buf = await randomBytesPromise(64);
  6; //Salt 64바이트에서를 base64 문자열로 변경
  return buf.toString("base64");
};

export const createHashedPassword = async (password) => {
  const salt = await createSalt();
  const key = await pbkdf2Promise(password, salt, 104906, 64, "sha512");
  const hashedPassword = key.toString("base64");

  console.log(hashedPassword, salt);
  return { hashedPassword, salt };
};

export const checkPassword = async (password, salt, newPassword) => {
  const key = await pbkdf2Promise(newPassword, salt, 104906, 64, "sha512");
  const newHashedPassword = key.toString("base64");

  return crypto.timingSafeEqual(
    Buffer.from(password),
    Buffer.from(newHashedPassword)
  );
};
