import { getDrugList } from "@/api/actions";
import { PageMetaData } from "@/components";
import { date_convert } from "@/config/dateConverter";
import DataTables from "@/pages/uikit/tables/DataTables";
import { setDrugComplaintList } from "@/store/actions/GeneralActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DrugsPage = () => {
  const dcDetail = useSelector((state) => state.GeneralReducer.drugComplaintList)
  const dispatch = useDispatch()

  const columnConfig = [
    {
      Header: "uuid",
      accessor: "uuid",
      defaultCanSort: true,
      // Cell: props => <a href="https://physically-calm-hermit.ngrok-free.app/complaints/">{"QWERTY"}</a>,
    //   Cell: ({ row }) => (console.log('QQQQQQ',row))
        Cell: ({ row }) => (
          <Link
            to={{ pathname: `/drugs/${row.values.uuid}` }}
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {row.values.uuid}
          </Link>
        ),
    },
    {
      Header: "Complaint against contact details",
      accessor: "complaint_againt_contact_details",
      defaultCanSort: true,
    },
    {
      Header: "Complaint against Name",
      accessor: "complaint_againt_name",
      defaultCanSort: false,
    },
    {
      Header: "Complaint by Name",
      accessor: "complaint_by_name",
      defaultCanSort: true,
    },
    {
      Header: "Complaint by Phone Number",
      accessor: "complaint_by_phone_number",
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
      Header: "Location Parent Name",
      accessor: "location_parent_name",
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
    getDrugList().then((res) => {
      if (res.data?.results) {
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
            case "registered":
              obj.status = "Registered";
              break;
          }
          const { d1, d2 } = date_convert(obj.created_at, obj.updated_at);
          obj.created_at = d1;
          obj.updated_at = d2;
        });
        dispatch(setDrugComplaintList(res.data.results));
      }
    });
  },[]);

  return (
    <>
      <PageMetaData title="Drug Complaints" />
      {dcDetail.length > 0 && (
        <DataTables
          title={`Drug Complaints`}
          columnConfig={columnConfig}
          rowData={dcDetail}
        />
      )}
    </>
  );
};

export default DrugsPage;
