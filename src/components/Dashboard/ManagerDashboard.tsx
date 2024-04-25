import React, { useCallback, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Table from "../utils/Table.tsx";
import { allUserService, createNewRoleService, deleteRoleService, editExistsRole } from "../services/userServices.ts";
import PopupForm from "../utils/PopupForm.tsx";
import { UserInfoContext } from "../Contexts/UserInfoContext.tsx";

const ManagerDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const [userList, setUserList] = useState([]);
  const [formRole, setFormRole] = useState("");
  const [userRoleStatus, setUserRoleStatus] = useState(false);
  const [editFormData , setEditFormData] = useState(null)

  const { userInfoState } = useContext(UserInfoContext);

  const department = userInfoState?.UserInfo?.department;


  console.log("userData",department)

  const fetchUserType = useCallback(async (role) => {
    const UserService = await allUserService({ role ,department});

    if (UserService.status === 200) {
      setUserList(UserService?.data?.userRoleList);
    } else {
      console.log("there is an erro ");
    }
  }, []);
  const toggleModal = (role) => {
    setEditFormData(null)
    setIsOpen(!isOpen);
    if(role.length){
      console.log("$$$$$$$$$" ,role.length,role)
      setFormRole("");
    }
    setFormRole(role);
 
  };



  const createNewRole = async (formData) => {
    const signupApiCall = await createNewRoleService(formData);

    let message = signupApiCall?.response?.data?.message;
    if (signupApiCall.status === true) {
      toast.success("User created successfully");
      setUserRoleStatus(!userRoleStatus);
      setIsOpen(!isOpen);
    } else {
      toast.error(message);
    }
  };

  const updateRole = async (formData) => {
    console.log("formData", formData);
    const updateResponse = await editExistsRole(formData);
    console.log("updateResponse", updateResponse);
    let message = updateResponse?.response?.data?.message;
    if (updateResponse.status === true) {
      setEditFormData(null);
      toast.success("User Updated successfully");
      setUserRoleStatus(!userRoleStatus);
      setIsOpen(!isOpen);
    } else {
      toast.error(message);
    }
  };

  const deleteRole = async (id, userType) => {
    const resposne = await deleteRoleService(id);

    if (resposne.status) {
      toast.success("User Sucessfully Deleted");

    
         setUserRoleStatus(!userRoleStatus);
    } else {
      toast.error("Error while deleting the role");
    }
  };

  const editRole = async (data) => {
  setIsOpen(!isOpen)
  setEditFormData(data)
  setFormRole(data?.role);
  };

  useEffect(() => {
    fetchUserType("user");
  }, [userRoleStatus]);

  return (
  <>
   <ToastContainer />
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

export default ManagerDashboard;
