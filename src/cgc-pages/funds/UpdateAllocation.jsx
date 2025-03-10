import { updateAllocation } from "@/api/actions";
import { date_convert } from "@/config/dateConverter";
import { useToggle } from "@/hooks";
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
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { toast } from "sonner";

const monthObjReverse = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};
const monthDDOption = [
  {
    label: "January",
    value: 1,
  },
  {
    label: "February",
    value: 2,
  },
  {
    label: "March",
    value: 3,
  },
  {
    label: "April",
    value: 4,
  },
  {
    label: "May",
    value: 5,
  },
  {
    label: "June",
    value: 6,
  },
  {
    label: "July",
    value: 7,
  },
  {
    label: "August",
    value: 8,
  },
  {
    label: "September",
    value: 9,
  },
  {
    label: "October",
    value: 10,
  },
  {
    label: "November",
    value: 11,
  },
  {
    label: "December",
    value: 12,
  },
];
const UpdateAllocation = ({ allocationDetails, setAllocationDetails, monthObj}) => {
  const { id } = useParams();
  const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();

  // useEffect(()=>{
  //     setReqBody()
  // },[])
  const a = {
    amount: allocationDetails.amount,
    month_start: monthObjReverse[allocationDetails.month_start],
    month_end: monthObjReverse[allocationDetails.month_end],
    description: allocationDetails.description,
    fund: allocationDetails.fund,
  };
  const [reqBody, setReqBody] = useState(a);

  const handelUpdateAllocation = () => {
    try {
      updateAllocation(id, reqBody).then((res) => {
        const { d1, d2 } = date_convert(
          res.data.created_at,
          res.data.updated_at
        );
        res.data.created_at = d1;
        res.data.updated_at = d2;
        res.data.month_start = monthObj[res.data.month_start];
        res.data.month_end = monthObj[res.data.month_end];
        setAllocationDetails(res.data);
        defaultModalToggle()
        toast.success("Allocation updated successfully", {
          position: "top-right",
          duration: 3000,
        });
      }
    );
    } 
    catch (e) {
      // console.log("**", e);
      // toast.error(e)
    }
  };
  return (
    <>
      <Button variant="de-primary" size="md" onClick={defaultModalToggle}>
        Edit Allocation
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
            Edit Allocation
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
              Amount
            </FormLabel>
            <Col sm="10">
              <FormControl
                type="text"
                defaultValue={allocationDetails["amount"]}
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
              Month Start
            </FormLabel>
            <Col sm="10">
              <Select
                defaultValue={[
                  {
                    label: allocationDetails["month_start"],
                    value: monthObjReverse[allocationDetails["month_start"]],
                  },
                ]}
                options={monthDDOption}
                onChange={(value) =>
                  setReqBody({ ...reqBody, month_start: value.value })
                }
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Month End
            </FormLabel>
            <Col sm="10">
              <Select
                defaultValue={[
                  {
                    label: allocationDetails["month_end"],
                    value: monthObjReverse[allocationDetails["month_end"]],
                  },
                ]}
                options={monthDDOption}
                onChange={(value) =>
                  setReqBody({ ...reqBody, month_end: value.value })
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
                style={{}}
                defaultValue={allocationDetails["description"]}
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
            onClick={handelUpdateAllocation}
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
            disabled={!(reqBody.description.length > 0) }
          >
            Edit
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UpdateAllocation;
