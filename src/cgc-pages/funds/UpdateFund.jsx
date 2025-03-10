import { getRepresentativeForFund, updateFund } from "@/api/actions";
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
import Select from "react-select";
import { toast } from "sonner";

const UpdateFund = ({ id, fundDetail, setFundDetail }) => {
  const [reprDDOption, setReprDDOption] = useState("");
  const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();
  const [reqBody, setReqBody] = useState({
    representative: fundDetail.representative,
    year: fundDetail.year,
    amount: fundDetail.amount,
    description: fundDetail.description,
  });

  const [defaultReprVal, setDefaultReprVal] = useState("");

  useEffect(() => {
    getRepresentativeForFund().then((res) => {
      const a = [];
      if (res.data?.results) {
        res.data.results.map((obj) => {
          const b = {
            label: `${obj.constituency_name} - ${obj.full_name}`,
            value: obj.id,
          };
          a.push(b);
          if (b.value == fundDetail.representative) {
            setDefaultReprVal(b);
          }
        });
        setReprDDOption(a);
      }
    });
  }, []);

  const handleUpdateFund = async () => {
    try {
      const res = await updateFund(id, reqBody);
      setFundDetail(res.data);
      defaultModalToggle();
      toast.success("Allocation updated successfully", {
        position: "top-right",
        duration: 3000,
      });
    } catch (e) {
      const errMsg = e.response.data.description[0];

      toast.error(errMsg, {
        position: "top-right",
        duration: 3000,
      });
    }
  };
  return (
    <>
      <Button variant="de-primary" size="md" onClick={defaultModalToggle}>
        Edit Fund
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
            Edit Fund
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
                defaultValue={[defaultReprVal]}
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
                type="number"
                // value={reqBody["year"]}
                // id={}
                defaultValue={fundDetail.year}
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
                type="number"
                // value={reqBody["amount"]}
                // id={}
                defaultValue={fundDetail.amount}
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
                // value={reqBody["description"]}
                // id={}
                as="textarea"
                rows={7}
                defaultValue={fundDetail.description}
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
            onClick={handleUpdateFund}
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
            Edit
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UpdateFund;
