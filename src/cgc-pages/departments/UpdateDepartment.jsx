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
  
  const UpdateDepartment = ({ id,departmentName }) => {
    const [nameOfDepartment, setNameOfDepartment] = useState("");
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
          if (res?.data?.results) {
            const a = res.data.results;
            a.map((obj) => {
              if (obj.id == id) {
                obj["name"] = nameOfDepartment;
              }
            });
          }
          dispatch(setDepartmentList(res.data.results))
        //   setCatData(res.data.categories);
        });
    //   }
      defaultModalToggle()
    };
    return (
      <>
        <Button variant="de-primary" size="sm" onClick={defaultModalToggle}>
          Update
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
            <Button onClick={updateDepartmentById} variant="de-primary" size="sm">
              Update
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };
  
  export default UpdateDepartment;
  