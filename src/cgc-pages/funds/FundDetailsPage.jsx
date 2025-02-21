import { getAllocationList, getFundDetails } from "@/api/actions";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  FormControl,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import { fundDetailsFilterConfig } from "@/config/QuickFilters";
import { date_convert } from "@/config/dateConverter";
import { useDispatch, useSelector } from "react-redux";
import { setAllocationList } from "@/store/actions/GeneralActions";
import DataTables from "@/pages/uikit/tables/DataTables";
import RegisterAllocation from "./RegisterAllocation";
import UpdateFund from "./UpdateFund";

const FundDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [fundDetail, setFundDetail] = useState("");
  const allocationList = useSelector(
    (state) => state.GeneralReducer.allocationList
  );

  const columnConfig = [
    {
      Header: "Id",
      accessor: "id",
      defaultCanSort: true,
      Cell: ({ row }) => (
        <Link
          to={{ pathname: `/allocations/${row.values.id}` }}
          style={{ color: "blue", textDecoration: "underline" }}
        >
          {row.values.id}
        </Link>
      ),
    },
    //   {
    //     Header: "Fund",
    //     accessor: "fund",
    //     defaultCanSort: true,
    //   },
    {
      Header: "Amount",
      accessor: "amount",
      defaultCanSort: true,
    },
    {
      Header: "Month Start",
      accessor: "month_start",
      defaultCanSort: true,
    },
    {
      Header: "Month End",
      accessor: "month_end",
      defaultCanSort: true,
    },
    //   {
    //     Header: "Is Deleted",
    //     accessor: "is_deleted",
    //     defaultCanSort: true,
    //   },
    {
      Header: "Description",
      accessor: "description",
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

  const monthObj = {
    1:'January',
    2:'February',
    3:'March',
    4:'April',
    5:'May',
    6:'June',
    7:'July',
    8:'August',
    9:'September',
    10:'October',
    11:'November',
    12:'December',
  }

  useEffect(() => {
    getFundDetails(id).then((res) => {
      if (res?.data) {
        const { d1, d2 } = date_convert(
          res.data.created_at,
          res.data.updated_at
        );
        res.data.created_at = d1;
        res.data.updated_at = d2;
        setFundDetail(res.data);
      }
    });

    getAllocationList(id).then((res) => {
      if (res?.data && res.data.length > 0) {
        res.data.map((obj) => {
          const { d1, d2 } = date_convert(obj.created_at, obj.updated_at);
          obj.created_at = d1;
          obj.updated_at = d2;
          obj.month_start = monthObj[obj.month_start]
          obj.month_end = monthObj[obj.month_end]
        });
        dispatch(setAllocationList(res.data));
      }
    });
  }, []);
  return (
    <>
      <Row>
        <Col lg="12">
          <Card className="m-2">
            <CardHeader>
              <CardTitle>Fund Details</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="6">
                  {fundDetailsFilterConfig.fields.map((each) => {
                    if (each.type == "input") {
                      return (
                        <Row className="mb-3">
                          <FormLabel
                            htmlFor={each.id}
                            className="col-sm-2 col-form-label text-end"
                          >
                            {each.label}
                          </FormLabel>
                          <Col sm="10">
                            <FormControl
                              type="text"
                              defaultValue={fundDetail[each.id]}
                              id={each.id}
                              readOnly={!each.edit}
                              disabled={!each.edit}
                            />
                          </Col>
                        </Row>
                      );
                    } else if (each.type == "textarea") {
                      return (
                        <Row className="mb-3">
                          <FormLabel
                            htmlFor={each.id}
                            className="col-sm-2 col-form-label text-end"
                          >
                            {each.label}
                          </FormLabel>
                          <Col sm="10">
                            <p>{fundDetail[each.id]}</p>
                            {/* <FormControl
								as="textArea"
								defaultValue={fundDetail[each.id]}
								id={each.id}
								readOnly={!each.edit}
							  /> */}
                          </Col>
                        </Row>
                      );
                    }
                    <Row className="mb-3">
                      <Col></Col>
                      <Col sm="10">
                        <Button onClick={updateStatus}>Save Status</Button>
                      </Col>
                    </Row>;
                  })}
                </Col>
                <Col lg='6'>
                {/* {fundDetailsFilterConfig.fields.map((each) => {
                  if (each.type == "dropdown") {
                    return (
                      <Row className="mb-3">
                        <FormLabel
                          htmlFor={each.id}
                          className="col-sm-2 col-form-label text-end"
                        >
                          {each.label}
                        </FormLabel>
                        <Col sm="10">
                          <FormSelect
                            value={
                              statusValue
                                ? statusValue
                                : fundDetail[each.id]
                            }
                            id={each.id}
                            onChange={(e) =>
                              handleStatusChange(e.target.value)
                            }
                          >
                            {each.options.map((opt, i) => {
                              return (
                                <option value={opt.value}>{opt.label}</option>
                              );
                            })}
                          </FormSelect>
                        </Col>
                      </Row>
                    );
                  }
                  })}
                  <Row className="mb-3">
                <Col></Col>
                <Col sm="10">
                  <Button onClick={updateStatus}>Update Status</Button>
                </Col>
              </Row> */}
                <RegisterAllocation id={id}/>
                {fundDetail && (
                  <UpdateFund id={id} fundDetail={fundDetail} setFundDetail={setFundDetail} />
                )}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        {allocationList.length > 0 && ( // need to check for whatever we pass to rowData -> on initial render complaintDetails was empty hence datatables was throwing errors as it has some map function looping over rowData without null checks
          <DataTables
            title={`Allocations`}
            columnConfig={columnConfig}
            rowData={allocationList}
          />
        )}
      </Row>
    </>
  );
};

export default FundDetailsPage;
