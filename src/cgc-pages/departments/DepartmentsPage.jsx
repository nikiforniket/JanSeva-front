import { PageMetaData } from "@/components";
import React, { useEffect, useState } from "react";
import DataTables from "../../pages/uikit/tables/DataTables";
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
import { getDepartmentList, registerDepartment } from "@/api/actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDepartmentList } from "@/store/actions/DepartmentActions";
import { useToggle } from "@/hooks";
import ActionDropdown from "@/cgc-pages/departments/ActionDropdown";
import UpdateDepartment from "./UpdateDepartment";
import { toast } from "sonner";

const DepartmentsPage = () => {
  const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();
  const columnConfig = [
    {
      Header: "ID",
      accessor: "id",
      defaultCanSort: true,
      Cell: ({ row }) => (
        <Link
          to={{ pathname: `/departments/${row.values.id}` }}
          style={{ color: "blue", textDecoration: "underline" }}
        >
          {row.values.id}
        </Link>
      ),
    },
    {
      Header: "Name",
      accessor: "name",
      // defaultCanSort: false,
    },
    // {
    //   Header: "",
    //   accessor: "update",
    //   defaultCanSort: true,
    //   Cell: ({ row }) => <UpdateDepartment id={row?.original?.id} departmentName={row?.original?.name} />
    // }
  ];

  // const [departmentList,setDepartmentList] = useState([])
  const dispatch = useDispatch();

  const [departmentName, setDepartmentName] = useState("");

  const departmentList = useSelector(
    (state) => state.DepartmentReducer.departmentList
  );

  useEffect(() => {
    getDepartmentList().then((res) => {
      if (res?.data.results) {
        // setDepartmentList(res.data.results)
        dispatch(setDepartmentList(res.data.results));
      }
    });
  }, []);

  const handleAddDepartment = async () => {
    const reqObj = {
      name: departmentName,
    };
    try {
      const res = await registerDepartment(reqObj);
      if (res?.data?.message == "Department registered successfully.") {
        getDepartmentList().then((res) => {
          if (res.data?.results) {
            // setDepartmentList(res.data.results)
            dispatch(setDepartmentList(res.data.results));
            toast.success("Sector added successfully", {
              position: "top-right",
              duration: 3000,
            });
          }
        });
        defaultModalToggle();
      }
    } catch (error) {
      const errMsg = error.response.data.errors.name[0];
      toast.error(errMsg, {
        position: "top-right",
        duration: 3000,
      });
    }
  };

  return (
    <>
      <PageMetaData title="Sectors" />
      <div className="mt-2" style={{ float: "right" }}>
        <Button onClick={defaultModalToggle}>Add Sector</Button>
      </div>
      {departmentList?.length > 0 && (
        <DataTables
          title={`Sectors`}
          columnConfig={columnConfig}
          rowData={departmentList}
          depFlag={true}
        />
      )}
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
            Add Sector
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
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Sector Name
            </FormLabel>
            <Col sm="10">
              <FormControl
                type="text"
                // value={departmentName}
                // id={}
                onChange={(e) => setDepartmentName(e.target.value)}
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button variant="de-secondary" size="sm" onClick={defaultModalToggle}>
            Close
          </Button>
          <Button
            onClick={handleAddDepartment}
            disabled={departmentName.length > 0 ? false : true}
            variant="de-primary"
            size="sm"
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
      {/* <Button onClick={getDepartmentList}>Hit Me</Button> */}
    </>
  );
};

export default DepartmentsPage;
