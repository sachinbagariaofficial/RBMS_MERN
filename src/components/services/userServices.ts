import axios from "axios";

interface userType {
  limit?: number;
  page?: number;
  role?: string;
  department?:string
}

interface createNewRoleType {
  username: string;
  email: string;
  role: string;
  department: string
  _id:string
}

export const allUserService = async ({ role, page, limit,department }: userType) => {
  try {

console.log("department",department)
    const apiRes = await axios(`http://localhost:5001/api/users?role=${role}&department=${department}&page=${page}&limit=${limit}`, {
      method: "get",
      withCredentials: true,
    });
    if (apiRes.status !== 200) {
      throw new Error("There is an error while fetching the data")
    }

    return apiRes


  } catch (error) {
    console.log("This is error", error);
    return error;
  }
};

export const createNewRoleService = async ({
  username,
  email,
  role,
  department
}: createNewRoleType) => {
  try {
    const userData = { username, email, role, department };

    const signUpresposne = await axios.post(
      "http://localhost:5001/api/createNewRole",
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

export const deleteRoleService = async (
  _id
) => {
  try {
    const deleteResposne = await axios.post(
      "http://localhost:5001/api/deleteRole",
      { _id }
    );

    console.log("deleteResposne", deleteResposne)

    if (deleteResposne.data.status === false) {
      throw new Error(deleteResposne.data);
    }
    return deleteResposne.data;
  } catch (error) {
    console.log("This is error", error);
    return error;
  }
};

export const editExistsRole = async ({
  username,
 _id,
  department
}: createNewRoleType) => {
  try {
    const userData = { username, _id, department };

    const resposne = await axios.post(
      "http://localhost:5001/api/editExistsRole",
      userData
    );

    if (resposne.data.status === false) {
      throw new Error(resposne.data);
    }
    return resposne.data;
  } catch (error) {
    console.log("This is error", error);
    return error;
  }
};