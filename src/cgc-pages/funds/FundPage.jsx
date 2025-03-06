import { getFundList, getRepresentativeForFund, registerFund } from "@/api/actions";
import { PageMetaData } from "@/components";
import { date_convert } from "@/config/dateConverter";
import { useToggle } from "@/hooks";
import DataTables from "@/pages/uikit/tables/DataTables";
import { setFundList } from "@/store/actions/GeneralActions";
import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import Select from "react-select";
import { toast } from "sonner";

const FundPage = () => {
  const dispatch = useDispatch();
  const fundList = useSelector((state) => state.GeneralReducer.fundList);
  const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();
  const [reqBody, setReqBody] = useState({
    representative: "",
    year: "",
    amount: "",
    description: "",
  });
  const [reprDDOption,setReprDDOption] = useState('')

  useEffect(() => {
    getFundList().then((res) => {
      if (res.data?.results) {
        res.data.results.map((obj) => {
          const { d1, d2 } = date_convert(obj.created_at, obj.updated_at);
          obj.created_at = d1;
          obj.updated_at = d2;
        });
        dispatch(setFundList(res.data.results));
      }
    });
    getRepresentativeForFund().then((res) => {
        const a = []
        if(res.data?.results){
            res.data.results.map((obj) => {
                const b = {
                    label: `${obj.constituency_name} - ${obj.full_name}`,
                    value: obj.id
                }
                a.push(b)
            })
            setReprDDOption(a)
        }
    })
  }, []);

  const columnConfig = [
    {
      Header: "Id",
      accessor: "id",
      defaultCanSort: true,
      Cell: ({ row }) => (
        <Link
          to={{ pathname: `/fund/${row.values.id}` }}
          style={{ color: "blue", textDecoration: "underline" }}
        >
          {row.values.id}
        </Link>
      ),
    },
    {
      Header: "Representative Name",
      accessor: "representative_name",
      defaultCanSort: true,
    },
    {
      Header: "Year",
      accessor: "year",
      defaultCanSort: true,
    },
    {
      Header: "Amount",
      accessor: "amount",
      defaultCanSort: true,
    },
    // {
    //   Header: "Description",
    //   accessor: "description",
    //   defaultCanSort: true,
    // },
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

  const handleAddFund = async () => {  
    try{  
        const res = await registerFund(reqBody)
        getFundList().then((res) => {
            if (res.data?.results) {
              res.data.results.map((obj) => {
                const { d1, d2 } = date_convert(obj.created_at, obj.updated_at);
                obj.created_at = d1;
                obj.updated_at = d2;
              });
              dispatch(setFundList(res.data.results));
            }
          });
          defaultModalToggle()
          toast.success("Fund registered successfully",{
            position: "top-right",
            duration: 3000,
          })
    }catch(e){
      toast.error(e.response.data.message,{
        position: "top-right",
        duration: 3000,
      })
    }
  };

  return (
    <>
      <PageMetaData title="Funds" />
      <div className="mt-2" style={{ float: "right" }}>
        <Button onClick={defaultModalToggle}>Add Fund</Button>
      </div>
      {fundList.length > 0 && ( // need to check for whatever we pass to rowData -> on initial render complaintDetails was empty hence datatables was throwing errors as it has some map function looping over rowData without null checks
        <DataTables
          title={`Funds`}
          columnConfig={columnConfig}
          rowData={fundList}
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
            Add Fund
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
              Representative
            </FormLabel>
            <Col sm="10">
            <Select
                // defaultValue={[{
                //   label: allocationDetails['month_start'],
                //   value: monthObjReverse[allocationDetails['month_start']],
                // }]}
                options={reprDDOption}
                onChange={(value) =>
                  setReqBody({ ...reqBody, representative: value.value })
                }
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Year
            </FormLabel>
            <Col sm="10">
              <FormControl
                type="text"
                // value={departmentName}
                // id={}
                onChange={(e) =>
                  setReqBody({ ...reqBody, year: Number(e.target.value) })
                }
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Amount
            </FormLabel>
            <Col sm="10">
              <FormControl
                type="text"
                // value={departmentName}
                // id={}
                onChange={(e) =>
                  setReqBody({ ...reqBody, amount: Number(e.target.value) })
                }
              />
            </Col>
          </Row>
          <Row className="mb-3">
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
                // value={departmentName}
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
            onClick={handleAddFund}
            // disabled={
            //   reqBody["amount"].length > 0 &&
            //   reqBody["description"].length > 0 &&
            //   reqBody["representative"].length > 0 &&
            //   reqBody["year"].length > 0
            //     ? false
            //     : true
            // }
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

export default FundPage;
