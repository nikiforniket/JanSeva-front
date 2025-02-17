import {
  getSchemeList,
  getSectorForScheme,
  registerScheme,
} from "@/api/actions";
import { PageMetaData } from "@/components";
import { useToggle } from "@/hooks";
import DataTables from "@/pages/uikit/tables/DataTables";
import { setSchemeList } from "@/store/actions/GeneralActions";
import React, { useEffect, useState } from "react";
import Select from "react-select";
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
import { date_convert } from "@/config/dateConverter";
import { Link } from "react-router-dom";

const SchemePage = () => {
  const [reqBody, setReqBody] = useState({
    name: "",
    sector: "",
    year: "",
  });
  const [sectorDD, setSectorDD] = useState([]);
  const dispatch = useDispatch();

  const schemeList = useSelector((state) => state.GeneralReducer.schemeList);
  const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();

  const columnConfig = [
    {
      Header: "Id",
      accessor: "id",
      defaultCanSort: true,
      Cell: ({ row }) => (<Link to={{ pathname: `/schemes/${row.values.id}` }} style={{color:'blue', textDecoration:'underline'}}>{row.values.id}</Link>)
    },
    {
      Header: "Name",
      accessor: "name",
      defaultCanSort: true,
    },
    {
      Header: "Sector",
      accessor: "sector",
      defaultCanSort: true,
    },
    {
      Header: "Year",
      accessor: "year",
      defaultCanSort: true,
    },
    {
      Header: "Is Active",
      accessor: "is_active",
      defaultCanSort: true,
      // Cell: ({ row }) => <Moment format='MM/DD/YYYY'></Moment>
    },
    {
      Header: "Created At",
      accessor: "created_at",
      defaultCanSort: true,
    },
    {
      Header: "Updated At",
      accessor: "updated_at",
      defaultCanSort: true,
    },
  ];

  const handleAddScheme = async () => {
    const res = await registerScheme(reqBody);
    getSchemeList().then((res) => {
      if (res.data?.results) {
        dispatch(setSchemeList(res.data.results));
      }
    });
    defaultModalToggle();
  };

  useEffect(() => {
    getSchemeList().then((res) => {
      if (res.data?.results) {
        res.data.results.map((obj) => {
          const { d1, d2 } = date_convert(obj.created_at, obj.updated_at);
          obj.created_at = d1;
          obj.updated_at = d2;
        });
        dispatch(setSchemeList(res.data.results));
      }
    });
    getSectorForScheme().then((res) => {
      const a = [];
      if (res.data?.results) {
        res.data.results.map((obj) => {
          const b = {
            label: obj.name,
            value: obj.id,
          };
          a.push(b);
        });
        setSectorDD(a);
      }
    });
  }, []);

  return (
    <>
      <PageMetaData title="Schemes" />
      <div className="mt-2" style={{ float: "right" }}>
        <Button onClick={defaultModalToggle}>Add Scheme</Button>
      </div>
      {schemeList.length > 0 && ( // need to check for whatever we pass to rowData -> on initial render complaintDetails was empty hence datatables was throwing errors as it has some map function looping over rowData without null checks
        <DataTables
          title={`Schemes`}
          columnConfig={columnConfig}
          rowData={schemeList}
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
            Add Scheme
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
              Scheme Name
            </FormLabel>
            <Col sm="10">
              <FormControl
                type="text"
                // value={departmentName}
                // id={}
                onChange={(e) =>
                  setReqBody({ ...reqBody, name: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Year of Launch
            </FormLabel>
            <Col sm="10">
              <FormControl
                type="text"
                // value={departmentName}
                // id={}
                onChange={(e) =>
                  setReqBody({ ...reqBody, year: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="mb-3">
            {/* <Col ></Col> */}
            <FormLabel
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Sector
            </FormLabel>
            <Col sm="10">
              <Select
                // defaultValue={{
                //   value: "value-1",
                //   label: "Value 1",
                // }}
                options={sectorDD}
                onChange={(value) =>
                  setReqBody({ ...reqBody, sector: value.value })
                }
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button variant="de-secondary" size="sm" onClick={defaultModalToggle}>
            Close
          </Button>
          <Button
            onClick={handleAddScheme}
            disabled={(reqBody['name'].length > 0 && reqBody['sector'] && reqBody['year'].length > 0 )? false : true}
            variant="de-primary"
            size="sm"
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SchemePage;
