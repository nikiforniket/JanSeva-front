import { updateNewsDetails } from "@/api/actions";
import { date_convert } from "@/config/dateConverter";
import { useToggle } from "@/hooks";
import React, { useState } from "react";
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

const UpdateNews = ({ id, newsDetail, setNewsDetail }) => {
  const [reqBody, setReqBody] = useState({
    short_title: newsDetail["short_title"],
    short_content: newsDetail["short_content"],
    status: newsDetail["status"],
  });
  const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();
  const newsStatusOpt = [
    {
      label: "Created",
      value: "created",
    },
    {
      label: "Approved",
      value: "approved",
    },
    {
      label: "Active",
      value: "active",
    },
    {
      label: "In active",
      value: "inactive",
    },
    {
      label: "In approval",
      value: "in_approval",
    },
  ];

  const handleUpdateNews = async () => {
    try {
      const res = await updateNewsDetails(id, reqBody);
      // if (res?.data) {
      const { d1, d2 } = date_convert(null, res.data.updated_at);
      // res.data.created_at = d1
      res.data.updated_at = d2;
      // }
      newsStatusOpt.map((obj) => {
        if(obj.value==res.data.status){
            res.data.status = obj.label;
        }
      })
      setNewsDetail(res.data);
      toast.success("News updated successfully", {
        position: "top-right",
        duration: 3000,
      });
      defaultModalToggle();
      
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Button variant="de-primary" size="md" onClick={defaultModalToggle}>
        Update News
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
            Edit News
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
              Status
            </FormLabel>
            <Col sm="10">
              <Select
                defaultValue={{
                  label: newsDetail["status"],
                  value: newsDetail["status"],
                }}
                options={newsStatusOpt}
                onChange={(value) => {
                  setReqBody({ ...reqBody, status: value.value });
                }}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Short Title
            </FormLabel>
            <Col sm="10">
              <FormControl
                type="text"
                value={reqBody["short_title"]}
                defaultValue={newsDetail["short_title"]}
                // value={departmentName}
                // id={}
                onChange={(e) =>
                  setReqBody({ ...reqBody, short_title: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Short Content
            </FormLabel>
            <Col sm="10">
              <FormControl
              as="textarea"
              rows={7}
                value={reqBody["short_content"]}
                defaultValue={newsDetail["short_content"]}
                // value={departmentName}
                // id={}
                onChange={(e) =>
                  setReqBody({ ...reqBody, short_content: e.target.value })
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
            onClick={handleUpdateNews}
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

export default UpdateNews;
