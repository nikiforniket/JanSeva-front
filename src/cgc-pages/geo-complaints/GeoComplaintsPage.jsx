import { getGeoComplaintList } from "@/api/actions";
import { PageMetaData } from "@/components";
import { date_convert } from "@/config/dateConverter";
import DataTables from "@/pages/uikit/tables/DataTables";
import { setGeoComplaintList } from "@/store/actions/GeoComplaintActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const GeoComplaintsPage = () => {
  const dispatch = useDispatch();
  const geoComplaintList = useSelector(
    (state) => state.GeoComplaintReducer.geoComplaintList
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
          to={{ pathname: `/geocomplaints/${row.values.uuid}` }}
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
      Header: "Complaint Type",
      accessor: "complaint_type",
      defaultCanSort: true,
    },
    {
      Header: "Lat",
      accessor: "lat",
      defaultCanSort: true,
    },
    {
      Header: "Long",
      accessor: "long",
      defaultCanSort: true,
    },
    {
      Header: "Status",
      accessor: "status",
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
    getGeoComplaintList().then((res) => {
      if (res?.data?.results) {
        res.data.results.map((obj) => {
          switch (obj.status) {
            case "registered":
              obj.status = "Registered";
            case "in_progress":
              obj.status = "In Progress";
            case "reported":
              obj.status = "Reported";
            case "rejected":
              obj.status = "Rejected";
            case "resolved":
              obj.status = "Resolved";
            case "report_acknowledged":
              obj.status = "Report Acknowledged";
          }
          const { d1, d2 } = date_convert(obj.created_at, obj.updated_at);
          obj.created_at = d1;
          obj.updated_at = d2;
        });
        dispatch(setGeoComplaintList(res.data.results));
      }
    });
  }, []);
  return (
    <>
      <PageMetaData title="GeoComplaints" />
      {geoComplaintList.length > 0 && (
        <DataTables
          title={`GeoComplaints`}
          columnConfig={columnConfig}
          rowData={geoComplaintList}
        />
      )}
      {/* <Button onClick={getComplaintsList}>Hit Me</Button> */}
    </>
  );
};

export default GeoComplaintsPage;
