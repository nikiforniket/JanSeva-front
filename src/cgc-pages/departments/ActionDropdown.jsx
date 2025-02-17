import {
  getDepartmentDetails,
  getDepartmentList,
  updateCategory,
} from "@/api/actions";
import { useToggle } from "@/hooks";
import { setDepartmentList } from "@/store/actions/DepartmentActions";
import React, { useState } from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ActionDropdown = ({ id, categoryName, setCatData, depId }) => {
  const [nameOfCategory, setNameOfCategory] = useState(categoryName);
  const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();

  const dispatch = useDispatch();

  //   const departmentList = useSelector((state) => state.DepartmentReducer.departmentList)

  const updateCategoryById = async () => {
    const reqObj = {
      name: nameOfCategory,
    };
    const res = await updateCategory(reqObj, id);
    if (res?.data?.message == "Category updated successfully.") {
      getDepartmentDetails(depId).then((res) => {
        if (res?.data?.categories) {
          const a = res.data.categories;
          a.map((obj) => {
            if (obj.id == id) {
              obj["name"] = nameOfCategory;
            }
          });
        }
        // dispatch(setDepartmentList(res.data.results))
        setCatData(res.data.categories);
      });
    }
    defaultModalToggle()
  };
  return (
    <>
      <Button variant="de-primary" size="sm" onClick={defaultModalToggle}>
        Update
      </Button>
      {/* <Dropdown className="d-inline-block">
        <DropdownToggle variant="link" id="dropdown-basic">
          <i className="las la-ellipsis-v font-20 text-muted" />
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem onClick={defaultModalToggle}>Update</DropdownItem>
          <Button
									variant="de-primary"
									size="sm"
									onClick={defaultModalToggle}
								>
									Launch demo modal
								</Button>
        </DropdownMenu>
      </Dropdown> */}

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
            Update
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
                defaultValue={categoryName}
                id={id}
                onChange={(e) => setNameOfCategory(e.target.value)}
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button variant="de-secondary" size="sm" onClick={defaultModalToggle}>
            Close
          </Button>
          <Button onClick={updateCategoryById} variant="de-primary" size="sm" disabled={categoryName==nameOfCategory}>
            Update
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ActionDropdown;
