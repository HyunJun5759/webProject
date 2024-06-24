"use server";

import { checkPassword, createHashedPassword } from "./passwordCrypto";
import clientPromise from "./mongodb";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { ObjectId } from "mongodb";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

async function checkExistingId(client, id) {
  const res = await client
    .db("User")
    .collection("UserAccount")
    .findOne({ id: id });

  return res ? true : false;
}

async function checkExistingEmail(client, email) {
  const res = await client
    .db("User")
    .collection("UserAccount")
    .findOne({ email: email });

  return res ? true : false;
}
export async function signupAction(prevState, formData) {
  const email = formData.get("email");
  const id = formData.get("id");
  const name = formData.get("name");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (isInvalidText(email)) {
    return { error: { email: "올바르지않은 이메일입니다" } };
  }

  if (isInvalidText(password)) {
    return { error: { password: "올바르지않은 패스워드입니다" } };
  }

  if (isInvalidText(id)) {
    return { error: { id: "올바르지않은 아이디입니다" } };
  }
  if (isInvalidText(name)) {
    return { error: { name: "올바르지않은 닉네임입니다" } };
  }

  const { hashedPassword, salt } = await createHashedPassword(password);
  const isValid = await checkPassword(hashedPassword, salt, confirmPassword);
  console.log(isValid);
  if (!isValid) {
    return { error: { confirmPassword: "비밀번호가 같지 않습니다" } };
  }

  const client = await clientPromise;

  try {
    // 중복유저 검사

    const isExistingId = await checkExistingId(client, id);
    const isExistingEmail = await checkExistingEmail(client, email);
    const isExistingName = await checkExistingEmail(client, name);
    // 존재하는 아이디일경우
    if (isExistingId) {
      return { error: { id: "이미 존재하는 아이디입니다" } };
    }

    // 존재하는 이메일일경우
    if (isExistingEmail) {
      return { error: { email: "이미 존재하는 이메일입니다" } };
    }

    if (isExistingName) {
      return { error: { name: "이미 존재하는 닉네임입니다" } };
    }
    await client
      .db("User")
      .collection("UserAccount")
      .insertOne({
        id: id,
        name: name,
        email: email,
        password: hashedPassword,
        salt: salt,
        posts: [],
        statistics: [
          {
            name: "total",
            solved: 0,
            correctQuestion: 0,
            correctRate: 0,
          },
          {
            name: "writtenTest",
            solved: 0,
            correctQuestion: 0,
            correctRate: 0,
          },
          {
            name: "practicalTest",
            solved: 0,
            correctQuestion: 0,
            correctRate: 0,
          },
        ],
      });
  } catch (error) {}

  redirect("/");
}

export async function writeAction(prevState, formData, params) {
  const title = formData.get("title");
  const description = formData.get("description");
  const session = await getServerSession();

  console.log(params);
  if (!session) return { message: "로그인이 필요한 작업입니다" };

  // title 유효값인지 검사
  const locale = new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" });
  const today = new Date(locale);

  try {
    const client = await clientPromise;

    // 게시글 DB에 저장
    const res = await client.db("User").collection("posts").insertOne({
      title: title,
      description: description,
      writer: session.user.name,
      date: today,
      comment: [],
    });
    if (!res) {
      return { message: "작성에 실패하셨습니다. 나중에 다시 시도 해주세요" };
    }

    // 게시글 ID를 작성한 유저정보에 포함
    const res_user = await client
      .db("User")
      .collection("UserAccount")
      .updateOne(
        { name: session.user.name },
        { $addToSet: { posts: res.insertedId } }
      );
  } catch (error) {
    console.log(error);
    return { message: error.message };
  }

  // redirect는 try 밖에 사용해야함
  redirect("/community");
}

export async function commentAction(prevState, formData) {
  const session = await getServerSession();
  const comment = formData.get("comment");
  const postId = formData.get("postId");
  console.log(new ObjectId(postId));
  if (!session) {
    return { message: "로그인이 필요한 작업입니다" };
  }

  try {
    const client = await clientPromise;

    const res = await client
      .db("User")
      .collection("posts")
      .updateOne(
        { _id: new ObjectId(postId) },
        {
          $addToSet: {
            comment: { comment: comment, writer: session.user.name },
          },
        }
      );
  } catch (error) {}

  redirect(`/community/${postId}`);
}

// export async function loginAction(prevState, formData) {
//   const id = formData.get("id");
//   const newPassword = formData.get("password");

//   if (isInvalidText(id) || isInvalidText(newPassword)) {
//     return { message: "Input Error" };
//   }

//   const client = await clientPromise;

//   const account = await client
//     .db("User")
//     .collection("UserAccount")
//     .findOne({ id: id });

//   console.log(account);

//   if (!account) {
//     return { message: "Not Found Account!" };
//   }

//   const results = await checkPassword(
//     account.password,
//     account.salt,
//     JSON.stringify(newPassword)
//   );

//   console.log(results);

//   if (!results) {
//     return { message: "Password false" };
//   }

//   redirect("/");
// }
