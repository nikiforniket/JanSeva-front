import { getComplaintsList } from "@/api/actions";
import { HttpClient } from "@/common";
import { PageMetaData } from "@/components";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import DataTables from "../../pages/uikit/tables/DataTables";
import { Link } from "react-router-dom";
import { customersDetails } from "../../pages/uikit/tables/data";
import { useDispatch, useSelector } from "react-redux";
import { setComplaintList } from "@/store/actions/ComplaintActions";
import { date_convert } from "@/config/dateConverter";

const ComplaintPage = () => {
  //   const [complaintList,setComplaintList] = useState([])
  const dispatch = useDispatch();

  const complaintDetails = useSelector(
    (state) => state.ComplaintReducer.complaintDetails
  );

  const columnConfig = [
    {
      Header: "uuid",
      accessor: "uuid",
      defaultCanSort: true,
      // Cell: props => <a href="https://physically-calm-hermit.ngrok-free.app/complaints/">{"QWERTY"}</a>,
      // Cell: ({ row }) => (console.log('QQQQQQ',row))
      Cell: ({ row }) => (
        <Link
          to={{ pathname: `/complaints/${row.values.uuid}` }}
          style={{ color: "blue", textDecoration: "underline" }}
        >
          {row.values.uuid}
        </Link>
      ),
    },
    {
      Header: "Full Name",
      accessor: "full_name",
      defaultCanSort: true,
    },
    {
      Header: "Phone Number",
      accessor: "phone_number",
      defaultCanSort: false,
    },
    {
      Header: "Department Name",
      accessor: "department_name",
      defaultCanSort: true,
    },
    {
      Header: "Category Name",
      accessor: "category_name",
      defaultCanSort: true,
    },
    {
      Header: "Status",
      accessor: "status",
      defaultCanSort: true,
    },
    {
      Header: "Location Name",
      accessor: "location_name",
      defaultCanSort: true,
    },
    {
      Header: "Created At",
      accessor: "created_at",
      defaultCanSort: true,
      // Cell: ({ row }) => <Moment format='MM/DD/YYYY'></Moment>
    },
    {
      Header: "Updated At",
      accessor: "updated_at",
      defaultCanSort: true,
    },
  ];
  useEffect(() => {
    getComplaintsList().then((res) => {
      if (res?.data?.results) {
        res.data.results.map((obj) => {
          switch (obj.status) {
            case "rejected":
              obj.status = "Rejected";
			  break;
            case "in_progress":
              obj.status = "In Progress";
			  break;
            case "reported":
              obj.status = "Reported";
			  break;
            case "resolved":
              obj.status = "Resolved";
			  break;
            case "report_acknowledged":
              obj.status = "Report Acknowledged";
			  break;
            case "registered":
              obj.status = "Registered";
			  break;
          }
          const { d1, d2 } = date_convert(obj.created_at, obj.updated_at);
          obj.created_at = d1;
          obj.updated_at = d2;
        });
        dispatch(setComplaintList(res.data.results));
      }
    });
  }, []);
  return (
    <>
      <PageMetaData title="Complaints" />
      {complaintDetails.length > 0 && ( // need to check for whatever we pass to rowData -> on initial render complaintDetails was empty hence datatables was throwing errors as it has some map function looping over rowData without null checks
        <DataTables
          title={`Complaints`}
          columnConfig={columnConfig}
          rowData={complaintDetails}
        />
      )}
      {/* <Button onClick={getComplaintsList}>Hit Me</Button> */}
    </>
  );
};

export default ComplaintPage;
