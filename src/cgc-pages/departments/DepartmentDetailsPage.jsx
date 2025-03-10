import { getDepartmentDetails, registerCategory } from "@/api/actions";
import { departmentDetailsFilterConfig } from "@/config/QuickFilters";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormControl,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import DataTables from "@/pages/uikit/tables/DataTables";
import ActionDropdown from "@/cgc-pages/departments/ActionDropdown";
import UpdateDepartment from "./UpdateDepartment";
import AddCategory from "./AddCategory";

const DepartmentDetailsPage = () => {
  const [departmentDetails, setDepartmentDetails] = useState([]);
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false)
  const [categoryVal,setCategoryVal] = useState("")
  const [categoryData,setCategoryData]=useState(null)
  const { id } = useParams();

  const categoryTableConfig = [
    {
      Header: "ID",
      accessor: "id",
      defaultCanSort: true,
    },
    {
      Header: "Name",
      accessor: "name",
      defaultCanSort: true,
    },
    {
      Header: "",
      accessor: "update",
      defaultCanSort: true,
      Cell: ({ row }) => <ActionDropdown id={row?.original?.id} categoryName={row?.original?.name} setCatData={setCategoryData} depId={id}/>
    }
  ];

  useEffect(() => {
    getDepartmentDetails(id).then((res) => {
      if (res?.data) {
        setDepartmentDetails(res.data);
      }
    });
  }, []);

  const toggleAddCategory = () => {
    setShowAddCategoryForm(showAddCategoryForm => !showAddCategoryForm)
  }

  const handleCategoryInput = (val) => {
      setCategoryVal(val)
  }

  const addCategory = async() => {
    const reqObj = {
      name:categoryVal,
      department:id
    }

    const res = await registerCategory(reqObj)

    setCategoryVal("")

    const detail = await getDepartmentDetails(id)
    setCategoryData(detail.data.categories)
  }

  return (
    <>
      <Row>
        <Col lg="12">
          <Card className="m-2">
            <CardHeader style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
              <CardTitle>Sector Details</CardTitle>
              <div >
              <UpdateDepartment id={id} departmentName={departmentDetails.name} setDepartmentDetails={setDepartmentDetails} />
              </div>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="9">
                  {departmentDetailsFilterConfig.fields.map((each) => {
                    if (each.type == "input") {
                      return (
                        <Row className="mb-3">
                          <FormLabel
                            htmlFor={each.id}
                            className="col-sm-2 col-form-label text-end"
                          >
                            {each.label}
                          </FormLabel>
                          <Col sm="10">
                            <FormControl
                              type="text"
                              defaultValue={departmentDetails[each.id]}
                              id={each.id}
                              readOnly={!each.edit}
                            />
                          </Col>
                        </Row>
                      );
                    } else if (each.type == "dropdown") { // no dropdown as of now in DepartmentDetails page. I am not configuring this if loop as of now
                      return (
                        <Row className="mb-3">
                          <FormLabel
                            htmlFor={each.id}
                            className="col-sm-2 col-form-label text-end"
                          >
                            {each.label}
                          </FormLabel>
                          <Col sm="10">
                            <FormSelect
                              id={each.id}
                              // onChange={(e) =>
                              //   handleCategoryChange(e.target.value)
                              // }
                            >
                              {each.options.map((opt, i) => {
                                return (
                                  <option value={opt.value}>{opt.label}</option>
                                );
                              })}
                            </FormSelect>
                          </Col>
                        </Row>
                      );
                    } else if (
                      each.type == "table" &&
                      departmentDetails[each.id]?.length > 0
                    ) {
                      // {departmentList && (
                      return (
                        <Row className="mb-3" style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                          {/* <Col > */}
                          <FormLabel
                            htmlFor={each.id}
                            className="col-sm-2 col-form-label text-end"
                          >
                            {each.label}
                          </FormLabel>
                          <Col sm="10" style={{display:'flex', justifyContent:'space-between'}}>
                          <DataTables
                            columnConfig={categoryTableConfig}
                            rowData={categoryData ? categoryData : departmentDetails[each.id]}
                          />
                          <div style={{float:'right',marginLeft:'1%'}}>
                          <AddCategory id={id} setCategoryData={setCategoryData} />
                          </div>
                          </Col>
                          {/* </Col> */}
                          {/* <Col >
                          </Col> */}
                        </Row>
                      );
                      // )}
                    }
                  })}
                </Col>
                <Col lg='3'>
                  {/* <Button variant="info" onClick={toggleAddCategory}>Add Category</Button> */}
                  {/* {showAddCategoryForm && (
                    <Row className="mb-3 mt-3">
                    <FormLabel
                      htmlFor='CategoryName'
                      className="col-sm-2 col-form-label text-end"
                    >
                      Category
                    </FormLabel>
                    <Col sm="10">
                      <FormControl
                        type="text"
                        // defaultValue={departmentList[each.id]}
                        value={categoryVal}
                        id='CategoryName'
                        onChange={(e)=>handleCategoryInput(e.target.value)}
                      />
                    </Col>
                    <Col sm="10">
                    <Button onClick={addCategory} variant="dark">Submit</Button>
                    </Col>
                  </Row>
                  )} */}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DepartmentDetailsPage;
