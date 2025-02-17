import {
    getDepartmentDetails,
    getDepartmentList,
    updateCategory,
    updateDepartment,
  } from "@/api/actions";
  import { useToggle } from "@/hooks";
import { setDepartmentList } from "@/store/actions/DepartmentActions";
  import React, { useState } from "react";
  import {
    Button,
    Col,
    FormControl,
    FormLabel,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,
  } from "react-bootstrap";
  import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
  
  const UpdateDepartment = ({ id,departmentName,setDepartmentDetails }) => {
    const [nameOfDepartment, setNameOfDepartment] = useState(departmentName);
    const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();
  
    const dispatch = useDispatch();
  
    //   const departmentList = useSelector((state) => state.DepartmentReducer.departmentList)
  
    const updateDepartmentById = async () => {
      const reqObj = {
        name: nameOfDepartment,
      };
      const res = await updateDepartment(id, reqObj);
    //   if (res?.data?.message == "Department updated successfully.") {
        getDepartmentList().then((res) => {
          dispatch(setDepartmentList(res.data.results))
        });
        getDepartmentDetails(id).then((res) => {
          if (res?.data) {
            setDepartmentDetails(res.data);
          }
        });
    //   }
      defaultModalToggle()
      toast.success("Successfully logged in. Redirecting....", {
        position: "top-right",
        duration: 3000,
      });
    };
    return (
      <>
        <Button variant="de-primary" style={{marginLeft:'2px'}} size="md" onClick={defaultModalToggle}>
          Edit Sector
        </Button>
  
        <Modal
          show={defaultModalOpen}
          onHide={defaultModalToggle}
          className="fade"
          id="exampleModalDefault"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalDefaultLabel"
          aria-hidden="true"
        >
          <ModalHeader>
            <h6 className="modal-title m-0" id="exampleModalDefaultLabel">
              Update Department
            </h6>
            <button
              type="button"
              className="btn-close"
              onClick={defaultModalToggle}
            />
          </ModalHeader>
          <ModalBody>
            <Row className="mb-3">
              <FormLabel
                htmlFor={id}
                className="col-sm-2 col-form-label text-end"
              >
                Name
              </FormLabel>
              <Col sm="10">
                <FormControl
                  type="text"
                  defaultValue={departmentName}
                  id={id}
                  onChange={(e) => setNameOfDepartment(e.target.value)}
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button variant="de-secondary" size="sm" onClick={defaultModalToggle}>
              Close
            </Button>
            <Button onClick={updateDepartmentById} variant="de-primary" size="sm" disabled={departmentName==nameOfDepartment}>
              Update
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };
  
  export default UpdateDepartment;
  