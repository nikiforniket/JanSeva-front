import { getSuggestionList } from "@/api/actions";
import { PageMetaData } from "@/components";
import { date_convert } from "@/config/dateConverter";
import DataTables from "@/pages/uikit/tables/DataTables";
import { setSuggestionList } from "@/store/actions/SuggestionActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SuggestionPage = () => {
  const columnConfig = [
    {
      Header: "uuid",
      accessor: "uuid",
      defaultCanSort: true,
      // Cell: props => <a href="https://physically-calm-hermit.ngrok-free.app/complaints/">{"QWERTY"}</a>,
      // Cell: ({ row }) => (console.log('QQQQQQ',row))
      Cell: ({ row }) => (
        <Link
          to={{ pathname: `/suggestions/${row.values.uuid}` }}
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
  const dispatch = useDispatch();
  const suggestionList = useSelector(
    (state) => state.SuggestionReducer.suggestionList
  );

  useEffect(() => {
    getSuggestionList().then((res) => {
      if (res?.data?.results) {
        res.data.results.map((obj) => {
          switch (obj.status) {
            case "rejected":
              obj.status = "Rejected";
            case "registered":
              obj.status = "Registered";
            case "viewed":
              obj.status = "Viewed";
            case "in_consideration":
              obj.status = "In Consideration";
          }
          const { d1, d2 } = date_convert(obj.created_at, obj.updated_at);
          obj.created_at = d1;
          obj.updated_at = d2;
        });
        dispatch(setSuggestionList(res.data.results));
      }
    });
  }, []);

  return (
    <>
      <PageMetaData title="Complaints" />
      {suggestionList.length > 0 && ( // need to check for whatever we pass to rowData -> on initial render complaintDetails was empty hence datatables was throwing errors as it has some map function looping over rowData without null checks
        <DataTables
          title={`Suggestions`}
          columnConfig={columnConfig}
          rowData={suggestionList}
        />
      )}
      {/* <Button onClick={getComplaintsList}>Hit Me</Button> */}
    </>
  );
};

export default SuggestionPage;
