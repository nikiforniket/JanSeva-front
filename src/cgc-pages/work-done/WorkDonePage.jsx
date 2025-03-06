import {
  dd1,
  dd2,
  getSchemeDDOpt,
  getSectorForScheme,
  getWorkDoneList,
  registerWorkDone,
  selectFundForWorkDone,
} from "@/api/actions";
import { date_convert } from "@/config/dateConverter";
import DataTables from "@/pages/uikit/tables/DataTables";
import { setFundDDOpt, setLocationDDOpt, setSubLocationDDOpt, setWorkDoneList } from "@/store/actions/GeneralActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { useToggle } from "@/hooks";
import { yearDDOpt } from "@/constant/yearConstants";
import { toast } from "sonner";
import { Link } from "react-router-dom";
// import { yearDDOpt } from "@/constant/yearConstants";

const WorkDonePage = () => {
  const [reqBody, setReqBody] = useState({
    description: "",
    year: "",
    amount: "",
    location: "",
    fund: "",
  });
  const dispatch = useDispatch();
  const workDoneList = useSelector(
    (state) => state.GeneralReducer.workDoneList
  );
  const columnConfig = [
    {
      Header: "Id",
      accessor: "id",
      defaultCanSort: true,
        Cell: ({ row }) => (
          <Link
            to={{ pathname: `/workdone/${row.values.id}` }}
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {row.values.id}
          </Link>
        ),
    },
    {
      Header: "Allocated Fund",
      accessor: "allocated_fund",
      defaultCanSort: true,
    },
    {
      Header: "Amount",
      accessor: "amount",
      defaultCanSort: true,
    },
    {
      Header: "Description",
      accessor: "description",
      defaultCanSort: true,
    },
    {
      Header: "Fund Month End",
      accessor: "fund_month_end",
      defaultCanSort: true,
      // Cell: ({ row }) => <Moment format='MM/DD/YYYY'></Moment>
    },
    {
      Header: "Fund Month Start",
      accessor: "fund_month_start",
      defaultCanSort: true,
      // Cell: ({ row }) => <Moment format='MM/DD/YYYY'></Moment>
    },
    {
      Header: "Fund Year",
      accessor: "fund_year",
      defaultCanSort: true,
    },
    {
      Header: "Location Name",
      accessor: "location_name",
      defaultCanSort: true,
    },
    {
      Header: "Location Parent Name",
      accessor: "location_parent_name",
      defaultCanSort: true,
    },
    {
      Header: "Location Parent Type",
      accessor: "location_parent_type",
      defaultCanSort: true,
    },
    // {
    //   Header: "Scheme",
    //   accessor: "scheme",
    //   defaultCanSort: true,
    // },
    // {
    //   Header: "Scheme Name",
    //   accessor: "scheme_name",
    //   defaultCanSort: true,
    // },
    // {
    //   Header: "Scheme Sector Sector",
    //   accessor: "scheme_sector_sector",
    //   defaultCanSort: true,
    // },
    {
      Header: "Year",
      accessor: "year",
      defaultCanSort: true,
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
  const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();

  const locationDDOpt = useSelector((state) => state.GeneralReducer.locationDDOpt)
  const subLocationDDOpt = useSelector((state) => state.GeneralReducer.subLocationDDOpt)
  const fundDDOpt = useSelector((state) => state.GeneralReducer.fundDDOpt)

  useEffect(() => {
    // try{
    // const res = await getWorkDoneList()
    getWorkDoneList().then((res) => {
      if (res.data?.results) {
        res.data.results.map((obj) => {
          const { d1, d2 } = date_convert(obj.created_at, obj.updated_at);
          obj.created_at = d1;
          obj.updated_at = d2;
        });
        dispatch(setWorkDoneList(res.data.results));
      }
    });
    dd1().then((res) => {
      const a = [];
      if (res.data?.results) {
        res.data.results.map((obj) => {
          const b = {
            label: obj.name,
            value: obj.id,
          };
          a.push(b);
        });
        dispatch(setLocationDDOpt(a));
      }
    });
  }, []);

  const handleAddWorkDone = async () => {
    // const rBody = reqBody
    // rBody.fund = fund
    // rBody.location = subL
    // console.log("rBody",reqBody)
    try {
      const res = await registerWorkDone(reqBody);
      getWorkDoneList().then((res) => {
        if (res.data?.results) {
          res.data.results.map((obj) => {
            const { d1, d2 } = date_convert(obj.created_at, obj.updated_at);
            obj.created_at = d1;
            obj.updated_at = d2;
          });
          dispatch(setWorkDoneList(res.data.results));
        }
      });
      defaultModalToggle();
      toast.success("Work Done registered successfully", {
        position: "top-right",
        duration: 3000,
      });
    } catch (e) {}
  };

  const setSubLocalDDOpt = (val) => {
    dd2(val.value).then((res) => {
      const a = [];
      if (res.data?.results) {
        res.data.results.map((obj) => {
          const b = {
            label: obj.name,
            value: obj.id,
          };
          a.push(b);
        });
        dispatch(setSubLocationDDOpt(a));
      }
    });
  };
  const monthObj = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const handleYearDD = async (val) => {
    // setReqBody({ ...reqBody, year: val.value })
    // amount - month_start to month_end
    try {
      const res = await selectFundForWorkDone(val.value);
      const a = [];
      res.data.map((obj) => {
        obj.month_start = monthObj[obj.month_start];
        obj.month_end = monthObj[obj.month_end];
        const b = {
          label: `${obj.amount} - ${obj.month_start} to ${obj.month_end}`,
          value: obj.id,
        };
        a.push(b);
      });
      dispatch(setFundDDOpt(a))
    } catch (e) {
      console.log("error", e);
    }
  };
  return (
    <>
      <div className="mt-2" style={{ float: "right" }}>
        <Button onClick={defaultModalToggle}>Add Work Done</Button>
      </div>
      {workDoneList.length > 0 && (
        <DataTables
          title={`Work Done`}
          columnConfig={columnConfig}
          rowData={workDoneList}
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
        size="lg"
      >
        <ModalHeader>
          <h6 className="modal-title m-0" id="exampleModalDefaultLabel">
            Add Work Done
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
              Year
            </FormLabel>
            <Col sm="10">
              <Select
                options={yearDDOpt}
                onChange={(value) => {
                  setReqBody({ ...reqBody, year: value.value });
                  handleYearDD(value);
                }}
              />
            </Col>
          </Row>
          {fundDDOpt.length > 0 && (
            <Row className="mb-3">
              <FormLabel
                //   htmlFor={id}
                className="col-sm-2 col-form-label text-end"
              >
                Fund
              </FormLabel>
              <Col sm="10">
                <Select
                  options={fundDDOpt}
                  onChange={
                    (value) => setReqBody({ ...reqBody, fund: value.value })
                    // setFund(value.value)
                  }
                />
              </Col>
            </Row>
          )}
          <Row className="mb-3">
            {/* <Col ></Col> */}
            <FormLabel
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Amount
            </FormLabel>
            <Col sm="10">
              <FormControl
                type="number"
                // value={departmentName}
                // id={}
                onChange={(e) =>
                  setReqBody({ ...reqBody, amount: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Location
            </FormLabel>
            <Col sm="10">
              <Select
                // defaultValue={[{
                //   label: allocationDetails['month_start'],
                //   value: monthObjReverse[allocationDetails['month_start']],
                // }]}
                options={locationDDOpt}
                onChange={(value) => setSubLocalDDOpt(value)}
              />
            </Col>
          </Row>
          {subLocationDDOpt.length > 0 && (
            <Row className="mb-3">
              <FormLabel
                //   htmlFor={id}
                className="col-sm-2 col-form-label text-end"
              >
                Sub-Location
              </FormLabel>
              <Col sm="10">
                <Select
                  // defaultValue={[{
                  //   label: allocationDetails['month_start'],
                  //   value: monthObjReverse[allocationDetails['month_start']],
                  // }]}
                  options={subLocationDDOpt}
                  onChange={(value) =>
                    setReqBody({ ...reqBody, location: value.value })
                  }
                />
              </Col>
            </Row>
          )}
          <Row className="mb-3">
            {/* <Col ></Col> */}
            <FormLabel
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Description
            </FormLabel>
            <Col sm="10">
              <FormControl
              as="textarea"
              rows={7}
                // value={}
                // id={}
                onChange={(e) =>
                  setReqBody({ ...reqBody, description: e.target.value })
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
            onClick={handleAddWorkDone}
            // disabled={(reqBody['name'].length > 0 && reqBody['sector'] && reqBody['year'].length > 0 )? false : true}
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

export default WorkDonePage;
