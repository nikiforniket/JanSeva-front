import React, { useState } from "react";
import { useToggle } from "@/hooks";
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
import Select from "react-select";
import { getAllocationList, registerAllocation } from "@/api/actions";
import { date_convert } from "@/config/dateConverter";
import { setAllocationList } from "@/store/actions/GeneralActions";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const RegisterAllocation = ({ id }) => {
    const dispatch = useDispatch()
  const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();
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
  const [reqBody, setReqBody] = useState({
    amount: "",
    month_start: "",
    month_end: "",
    description: "",
    fund: "",
  });

  const handleAddAllocation = async() => {
    try {
      const res = await registerAllocation(reqBody);
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
          defaultModalToggle()
    } catch (e) {
        toast.error(e.response.data.message,{
          position: "top-right",
          duration: 3000,
        })
    }
  };
  return (
    <>
      <Button variant="de-primary" size="md" onClick={defaultModalToggle}>
        Add Allocation
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
            Add Allocation
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
                type="number"
                // defaultValue={allocationDetails["amount"]}
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
              Fund
            </FormLabel>
            <Col sm="10">
              <FormControl
                type="text"
                // defaultValue={allocationDetails["amount"]}
                // value={departmentName}
                // id={}
                onChange={(e) =>
                  setReqBody({ ...reqBody, fund: Number(e.target.value) })
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
                // defaultValue={[
                //   {
                //     label: allocationDetails["month_start"],
                //     value: monthObjReverse[allocationDetails["month_start"]],
                //   },
                // ]}
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
                // defaultValue={[
                //   {
                //     label: allocationDetails["month_end"],
                //     value: monthObjReverse[allocationDetails["month_end"]],
                //   },
                // ]}
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
                type="textarea"
                style={{}}
                // defaultValue={allocationDetails["description"]}
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
            onClick={handleAddAllocation}
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

export default RegisterAllocation;
