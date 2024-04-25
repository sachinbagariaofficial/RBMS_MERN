import React, { useCallback, useEffect, useState } from "react";
import {
  allUserService,
  createNewRoleService,
  deleteRoleService,
  editExistsRole,
} from "../services/userServices.ts";
import Pagination from "../utils/Pagination.tsx";
import PopupForm from "../utils/PopupForm.tsx";
import { signupService } from "../services/authService.tsx";
import { ToastContainer, toast } from "react-toastify";
import Table from "../utils/Table.tsx";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [managerList, setManagerList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [formRole, setFormRole] = useState("");
  const [userRoleStatus, setUserRoleStatus] = useState(false);
  const [managerRoleStatus, setManagerRoleStatus] = useState(false);
  const [editFormData, setEditFormData] = useState(null);

  const fetchUserType = useCallback(async (role) => {
    const UserService = await allUserService({ role });
console.log("UserService" ,UserService)
    if (UserService.status === 200) {
      if (role === "manager") {
        setManagerList(UserService?.data?.userRoleList);
      } else if (role === "user") {
        setUserList(UserService?.data?.userRoleList);
      }
    } else {
      console.log("there is an erro ");
    }
  }, []);

  useEffect(() => {
    fetchUserType("user");
  }, [userRoleStatus]);

  useEffect(() => {
    fetchUserType("manager");
  }, [managerRoleStatus]);

  const toggleModal = (role) => {
    setEditFormData(null);
    setIsOpen(!isOpen);
    if (role.length) {
      console.log("$$$$$$$$$", role.length, role);
      setFormRole("");
    }
    setFormRole(role);
  };

  const createNewRole = async (formData) => {
    const signupApiCall = await createNewRoleService(formData);

    let message = signupApiCall?.response?.data?.message;
    if (signupApiCall.status === true) {
      toast.success("User created successfully");
      formData?.role === "manager"
        ? setManagerRoleStatus(!managerRoleStatus)
        : setUserRoleStatus(!userRoleStatus);
      setIsOpen(!isOpen);
    } else {
      toast.error(message);
    }
  };

  const updateRole = async (formData) => {

    const updateResponse = await editExistsRole(formData);
 
    let message = updateResponse?.response?.data?.message;
    if (updateResponse.status === true) {
      setEditFormData(null);
      toast.success("User Updated successfully");
      formData?.role === "manager"
        ? setManagerRoleStatus(!managerRoleStatus)
        : setUserRoleStatus(!userRoleStatus);
      setIsOpen(!isOpen);
    } else {
      toast.error(message);
    }
  };

  const deleteRole = async (id, userType) => {
    const resposne = await deleteRoleService(id);

    if (resposne.status) {
      toast.success("User Sucessfully Deleted");

      userType === "manager"
        ? setManagerRoleStatus(!managerRoleStatus)
        : setUserRoleStatus(!userRoleStatus);
    } else {
      toast.error("Error while deleting the role");
    }
  };

  const editRole = async (data) => {
    setIsOpen(!isOpen);
    setEditFormData(data);
    setFormRole(data?.role);
  };

  return (
    <>
      <ToastContainer />
      <div>
        <Table
          list={managerList}
          toggleModal={toggleModal}
          userType="manager"
          deleteRole={deleteRole}
          editRole={editRole}
        />
      </div>

      <div>
        <Table
          list={userList}
          toggleModal={toggleModal}
          userType="user"
          deleteRole={deleteRole}
          editRole={editRole}
        />
      </div>

      <div>
        {isOpen && (
          <PopupForm
            toggleModal={toggleModal}
            roleType={formRole}
            createNewRole={createNewRole}
            editFormData={editFormData}
            updateRole={updateRole}
          />
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
