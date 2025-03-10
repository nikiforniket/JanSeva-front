import { dd2, selectFundForWorkDone, updateWorkDone } from "@/api/actions";
import { yearDDOpt } from "@/constant/yearConstants";
import { useToggle } from "@/hooks";
import { setSubLocationDDOpt } from "@/store/actions/GeneralActions";
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
import Select from "react-select";
import { toast } from "sonner";

const UpdateWork = ({ workDetails, setWorkDetails }) => {
    const dispatch = useDispatch()

  const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();

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

  const [reqBody, setReqBody] = useState({
    fund: workDetails["fund"],
    amount: workDetails["amount"],
    location: workDetails["location"],
    description: workDetails["description"],
    year: workDetails["year"],
  });

  const [fund, setFund] = useState("");
  const [subLoc,setSubLoc] = useState('')

  const subLocationDDOpt = useSelector(
    (state) => state.GeneralReducer.subLocationDDOpt
  );
  
  const [fundDDOpt,setFundDDOpt] = useState('')

  const handleYearDD = async (val,flag=false) => {
    // setReqBody({ ...reqBody, year: val.value })
    // amount - month_start to month_end
    try {
      const res = await selectFundForWorkDone(val.value);
      const a = []
      res.data.map((obj) => {
        obj.month_start = monthObj[obj.month_start];
        obj.month_end = monthObj[obj.month_end];
        const b = {
          label: `${obj.amount} - ${obj.month_start} to ${obj.month_end}`,
          value: obj.id,
        };
        a.push(b);
        if (workDetails["fund"] == obj.id) {
          setFund([b]);
        }
    });
    if(flag){
        setFund([a[0]])
    }
    setFundDDOpt(a)
    } catch (e) {
      console.log("error", e);
    }
  };
  useEffect(() => {
    handleYearDD({ value: workDetails["year"] })
    dd2(workDetails.location_parent).then((res) => {
          const a = [];
          if (res.data?.results) {
            res.data.results.map((obj) => {
              const b = {
                label: obj.name,
                value: obj.id,
              };
              a.push(b);
              if (workDetails["location"] == obj.id) {
                setSubLoc([b]);
              }
            });
            dispatch(setSubLocationDDOpt(a));
          }
        });
  }, []);

  const handleUpdateWorkDone = async() => {
    try{
        const res = await updateWorkDone(workDetails['id'],reqBody)
        setWorkDetails(res.data)
    }catch(e){
        const x = Object.keys(e.response.data)
        x.map((item) => {
        const errMsg = `${item} - ${e.response.data[item]}`
        toast.error(errMsg, {
            position: "top-right",
            duration: 3000,
          });
        })
        
    }
    defaultModalToggle()
  };
  return (
    <>
      <Button variant="de-primary" size="md" onClick={defaultModalToggle}>
        Update Work Done
      </Button>
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
            Edit Work Done
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
                defaultValue={{
                  label: workDetails["year"],
                  value: workDetails["year"],
                }}
                options={yearDDOpt}
                onChange={(value) => {
                  setReqBody({ ...reqBody, year: value.value });
                    handleYearDD(value,true);
                }}
              />
            </Col>
          </Row>
          {/* {fundDDOpt.length > 0 && ( */}
          <Row className="mb-3">
            <FormLabel
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Fund
            </FormLabel>
            <Col sm="10">
              <Select
                defaultValue={fund}
                value={fund}
                options={fundDDOpt}
                onChange={
                  (value) => {
                    setReqBody({ ...reqBody, fund: value.value }) 
                    setFund(value)
                }
                  // setFund(value.value)
                }
              />
            </Col>
          </Row>
          {/* )} */}
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
                value={reqBody['amount']}
                defaultValue={workDetails['amount']}
                // value={departmentName}
                // id={}
                onChange={(e) =>
                  setReqBody({ ...reqBody, amount: e.target.value })
                }
              />
            </Col>
          </Row>
          {/* <Row className="mb-3">
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
              // onChange={(value) => setSubLocalDDOpt(value)}
            />
          </Col>
        </Row> */}
          {/* {subLocationDDOpt.length > 0 && ( */}
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
                  defaultValue={subLoc}
                  options={subLocationDDOpt}
                  onChange={(value) =>
                    setReqBody({ ...reqBody, location: value.value })
                  }
                />
              </Col>
            </Row>
          {/* )} */}
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
                type="text"
                defaultValue={workDetails['description']}
                value={reqBody['description']}
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
            onClick={handleUpdateWorkDone}
            // disabled={(reqBody['name'].length > 0 && reqBody['sector'] && reqBody['year'].length > 0 )? false : true}
            variant="de-primary"
            size="sm"
          >
            Edit
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UpdateWork;
