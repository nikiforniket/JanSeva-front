import { getNews, registerNews } from "@/api/actions";
import { PageMetaData } from "@/components";
import { date_convert } from "@/config/dateConverter";
import { useToggle } from "@/hooks";
import DataTables from "@/pages/uikit/tables/DataTables";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
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

const NewsPage = () => {
  const [newsList, setNewsList] = useState("");
  const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();
  const [reqBody, setReqBody] = useState({
      short_title: '',
      short_content: '',
      status: ''
    });

  useEffect(() => {
    try {
      getNews().then((res) => {
        if (res.data?.results) {
          res.data.results.map((obj) => {
            switch (obj.status) {
              case "created":
                obj.status = "Created";
                break;
              case "approved":
                obj.status = "Approved";
                break;
              case "active":
                obj.status = "Active";
                break;
              case "inactive":
                obj.status = "In active";
                break;
              case "in_approval":
                obj.status = "In approval";
                break;
            }
            const { d1, d2 } = date_convert(obj.created_at, obj.updated_at);
            obj.created_at = d1;
            obj.updated_at = d2;
          });
          setNewsList(res.data.results);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const columnConfig = [
    {
      Header: "ID",
      accessor: "id",
      defaultCanSort: true,
        Cell: ({ row }) => (
          <Link
            to={{ pathname: `/news/${row.values.id}` }}
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {row.values.id}
          </Link>
        ),
    },
    {
      Header: "Short Title",
      accessor: "short_title",
      // defaultCanSort: false,
    },
    {
      Header: "Short Content",
      accessor: "short_content",
      // defaultCanSort: false,
    },
    {
      Header: "Status",
      accessor: "status",
      // defaultCanSort: false,
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

  const handleUpdateNews = async() => {
    try{
      const res = await registerNews(reqBody)
      getNews().then((res) => {
        if (res.data?.results) {
          res.data.results.map((obj) => {
            switch (obj.status) {
              case "created":
                obj.status = "Created";
                break;
              case "approved":
                obj.status = "Approved";
                break;
              case "active":
                obj.status = "Active";
                break;
              case "inactive":
                obj.status = "In active";
                break;
              case "in_approval":
                obj.status = "In approval";
                break;
            }
            const { d1, d2 } = date_convert(obj.created_at, obj.updated_at);
            obj.created_at = d1;
            obj.updated_at = d2;
          });
          setNewsList(res.data.results);
        }
      });
      defaultModalToggle();
      toast.success("News registered successfully", {
        position: "top-right",
        duration: 3000,
      });
    }catch(e){
      console.log(e);
      
    }

  }

  return (
    <>
      <PageMetaData title="News" />
      <div className="mt-2" style={{ float: "right" }}>
        <Button onClick={defaultModalToggle}>Add News</Button>
      </div>
      {newsList?.length > 0 && (
        <DataTables
          title={`News Details`}
          columnConfig={columnConfig}
          rowData={newsList}
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
            Add News
          </h6>
          <button
            type="button"
            className="btn-close"
            onClick={defaultModalToggle}
          />
        </ModalHeader>
        <ModalBody>
          {/* <Row className="mb-3">
            <FormLabel
              //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Status
            </FormLabel>
            <Col sm="10">
              <Select
                // defaultValue={{
                //   label: newsDetail["status"],
                //   value: newsDetail["status"],
                // }}
                options={newsStatusOpt}
                onChange={(value) => {
                  setReqBody({ ...reqBody, status: value.value });
                }}
              />
            </Col>
          </Row> */}
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
                // value={reqBody["short_title"]}
                // defaultValue={newsDetail["short_title"]}
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
                // value={reqBody["short_content"]}
                // defaultValue={newsDetail["short_content"]}
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
    // <>
    // {newsList.length > 0 && newsList.map((obj) => (
    //     // <>
    //     <NewsCard2 id={obj.id} title={obj.short_title} description={obj.short_content}/>
    //     // </>
    // ))
    // }
    // </>
  );
};

export default NewsPage;
