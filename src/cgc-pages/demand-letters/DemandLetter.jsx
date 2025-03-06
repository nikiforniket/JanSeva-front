import { getDemandLettersList } from "@/api/actions";
import { PageMetaData } from "@/components";
import { date_convert } from "@/config/dateConverter";
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
      <Link to={{ pathname: `/demandletters/${row.values.uuid}` }} style={{color:'blue', textDecoration:'underline'}}>
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
  {
		Header: 'Created At',
		accessor: 'created_at',
		defaultCanSort: true,
    // Cell: ({ row }) => <Moment format='MM/DD/YYYY'></Moment>
	},{
		Header: 'Updated At',
		accessor: 'updated_at',
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
        res.data.results.map((obj) => {
              switch(obj.status){
                case "rejected":
                  obj.status = 'Rejected'
                  break; 
                case "in_progress":
                  obj.status = 'In Progress' 
                  break;
                case "resolved":
                  obj.status = 'Resolved'
                  break;
                case "registered":
                  obj.status = 'Registered' 
                  break;
              }
              const {d1,d2} = date_convert(obj.created_at,obj.updated_at) 
              obj.created_at = d1
              obj.updated_at = d2
            })
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
