import {
  getDepartmentDetails,
  getDepartmentList,
  registerCategory,
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

const AddCategory = ({ id, setCategoryData }) => {
  const [categoryVal, setCategoryVal] = useState("");
  // const [categoryData,setCategoryData]=useState(null)
  const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();

  const dispatch = useDispatch();

  //   const departmentList = useSelector((state) => state.DepartmentReducer.departmentList)
  const addCategory = async () => {
    const reqObj = {
      name: categoryVal,
      department: id,
    };

    try {
      const res = await registerCategory(reqObj);

      setCategoryVal("");

      const detail = await getDepartmentDetails(id);
      setCategoryData(detail.data.categories);
      toast.success("Sector added successfully", {
        position: "top-right",
        duration: 3000,
      });
      defaultModalToggle();
    } catch (error) {
      console.log(error)
      const errMsg = error.response.data.errors.non_field_errors[0];
      toast.error(errMsg, {
        position: "top-right",
        duration: 3000,
      });
    }
  };

  return (
    <>
      <Button variant="de-primary" size="md" onClick={defaultModalToggle}>
        Add Category
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
            Add Category
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
                //   defaultValue={}
                value={categoryVal}
                //   id={id}
                onChange={(e) => setCategoryVal(e.target.value)}
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button variant="de-secondary" size="sm" onClick={defaultModalToggle}>
            Close
          </Button>
          <Button onClick={addCategory} variant="de-primary" size="sm">
            Add Category
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AddCategory;
