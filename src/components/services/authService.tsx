import axios from "axios";

interface loginType {
  email: string;
  password: string;
  role: string;
}

export const loginService = async ({ email, password, role }: loginType) => {
  try {
    const userData = { email, password, role };

    // const loginResponse = await axios.post(
    //   "http://localhost:5001/auth/login",
    //   userData,
    // );

    const loginResponse = await axios("http://localhost:5001/auth/login", {
      method: "post",
      data: userData,
      withCredentials: true,
    });

    console.log("loginResponse", loginResponse);

    if (loginResponse.status === 200) {
      return loginResponse;
    }
  } catch (error) {
    console.log("This is error", error);
    return error;
  }
};

interface signupType {
  username: string;
  email: string;
  password: string;
  role: string;
}

export const signupService = async ({
  username,
  email,
  password,
  role,
}: signupType) => {
  try {
    const userData = { username, email, password, role };

    const signUpresposne = await axios.post(
      "http://localhost:5001/auth/signup",
      userData
    );

    if (signUpresposne.data.status === false) {
      throw new Error(signUpresposne.data);
    }
    return signUpresposne.data;
  } catch (error) {
    console.log("This is error", error);
    return error;
  }
};

export const logoutService = async () => {
  try {
    const logoutResponse = await axios.get("http://localhost:5001/auth/logout");

    return logoutResponse;
  } catch (error) {
    console.log("This is error", error);
    return error;
  }
};
