import {
  dd2,
  getSchemeDDOpt,
  getSectorForScheme,
  selectFundForWorkDone,
  updateWorkDone,
} from "@/api/actions";
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

const UpdateAchievement = ({ workDetails, setWorkDetails }) => {
  const dispatch = useDispatch();

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
    scheme: workDetails["scheme"],
    amount: workDetails["amount"],
    location: workDetails["location"],
    description: workDetails["description"],
    year: workDetails["year"],
    sector: workDetails["sector"],
  });
  const [sectorDDOpt, setSectorDDOpt] = useState("");

  const [subLoc, setSubLoc] = useState("");

  const subLocationDDOpt = useSelector(
    (state) => state.GeneralReducer.subLocationDDOpt
  );

  const [schemeDDOpt, setSchemeDDOpt] = useState("");
  const [sector, setSector] = useState("");
  const [scheme, setScheme] = useState("");

  useEffect(() => {
    // handleYearDD({ value: workDetails["year"] })
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
    getSectorForScheme().then((res) => {
      const a = [];
      if (res.data?.results) {
        res.data.results.map((obj) => {
          const b = {
            label: obj.name,
            value: obj.id,
          };
          a.push(b);
          if (workDetails["sector"] == obj.id) {
            setSector([b]);
          }
        });
        setSectorDDOpt(a);
      }
    });
    getSchemeDDOpt(workDetails["sector"]).then((res) => {
      const a = [];
      if (res.data?.results) {
        res.data.results.map((obj) => {
          const b = {
            label: obj.name,
            value: obj.id,
          };
          a.push(b);
          if (workDetails["scheme"] == obj.id) {
            setScheme([b]);
          }
        });
      }
      setSchemeDDOpt(a);
    });
  }, []);

  const handleSectorDD = async (value) => {
    setReqBody({ ...reqBody, sector: value.value });
    try {
      const res = await getSchemeDDOpt(value.value);
      const a = [];
      if (res.data?.results) {
        res.data.results.map((obj) => {
          const b = {
            label: obj.name,
            value: obj.id,
          };
          a.push(b);
        });
      }
      setScheme(null)
      setReqBody({...reqBody, scheme:null})
      setSchemeDDOpt(a);
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateWorkDone = async () => {
    try {
      const res = await updateWorkDone(workDetails["id"], reqBody);
      setWorkDetails(res.data);
      defaultModalToggle();
    } catch (e) {
      const x = Object.keys(e.response.data);
      x.map((item) => {
        const errMsg = `${item} - ${e.response.data[item]}`;
        toast.error(errMsg, {
          position: "top-right",
          duration: 3000,
        });
      });
    }
  };
  return (
    <>
      <Button variant="de-primary" size="md" onClick={defaultModalToggle}>
        Edit Achievement
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
            Edit Achievement
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
                  // handleYearDD(value,true);
                }}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Sector
            </FormLabel>
            <Col sm="10">
              <Select
                defaultValue={sector}
                value={sector}
                options={sectorDDOpt}
                onChange={(value) => {
                  handleSectorDD(value);
                  setSector(value);
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
              Scheme
            </FormLabel>
            <Col sm="10">
              <Select
                defaultValue={scheme}
                value={scheme}
                options={schemeDDOpt}
                onChange={
                  (value) => {
                    setReqBody({ ...reqBody, scheme: value.value });
                    setScheme(value);
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
                value={reqBody["amount"]}
                defaultValue={workDetails["amount"]}
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
                type="text"
                defaultValue={workDetails["description"]}
                value={reqBody["description"]}
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

export default UpdateAchievement;
