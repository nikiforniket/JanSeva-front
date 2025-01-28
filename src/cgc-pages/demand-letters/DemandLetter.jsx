import { getDemandLettersList } from "@/api/actions";
import { PageMetaData } from "@/components";
import DataTables from "@/pages/uikit/tables/DataTables";
import { setDemandLetterList } from "@/store/actions/DemandLettersActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const columnConfig = [
  {
    Header: "uuid",
    accessor: "uuid",
    defaultCanSort: true,
    // Cell: props => <a href="https://physically-calm-hermit.ngrok-free.app/complaints/">{"QWERTY"}</a>,
    // Cell: ({ row }) => (console.log('QQQQQQ',row))
    Cell: ({ row }) => (
      <Link to={{ pathname: `/demandletters/${row.values.uuid}` }}>
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
    Header: "Status",
    accessor: "status",
    defaultCanSort: true,
  },
];

const DemandLetter = () => {

  const dispatch = useDispatch();

    const demandLetterDetails = useSelector((state) => state.DemandLetterReducer.demandLetterList)

  useEffect(() => {
    getDemandLettersList().then((res) => {
      // console.log(res)
      if (res?.data?.results) {
        dispatch(setDemandLetterList(res.data.results));
      }
    });
  },[]);
  return (
    <>
      <PageMetaData title="Demand Letters" />
      {demandLetterDetails.length > 0 && ( 
        <DataTables
          title={`Demand Letters`}
          columnConfig={columnConfig}
          rowData={demandLetterDetails}
        />
      )}
      {/* <Button onClick={getComplaintsList}>Hit Me</Button> */}
    </>
  );
};

export default DemandLetter;
