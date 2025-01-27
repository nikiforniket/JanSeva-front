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

const DepartmentDetailsPage = () => {
  const [departmentList, setDepartmentList] = useState([]);
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
        setDepartmentList(res.data);
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
    // setDepartmentList(currentVal =>{
    //   currentVal['categories']=detail.data.categories
    // })
    // departmentList['categories'] = detail.data.categories
    // console.log(departmentList)

    // setDepartmentList(departmentList)
  }

  // const handleCategoryChange = (val) => {
  //   console.log("##", val);
  // };

  return (
    <>
      <Row>
        <Col lg="12">
          <Card className="m-2">
            <CardHeader>
              <CardTitle>Department Details</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="6">
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
                              defaultValue={departmentList[each.id]}
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
                      departmentList[each.id]?.length > 0
                    ) {
                      // {departmentList && (
                      return (
                        <Row className="mb-3" style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                          <FormLabel
                            htmlFor={each.id}
                            className="col-sm-2 col-form-label text-end"
                          >
                            {each.label}
                          </FormLabel>
                          <Col sm="10">
                          <DataTables
                            columnConfig={categoryTableConfig}
                            rowData={categoryData ? categoryData : departmentList[each.id]}
                          />
                          </Col>
                        </Row>
                      );
                      // )}
                    }
                  })}
                </Col>
                <Col lg='6'>
                  <Button variant="info" onClick={toggleAddCategory}>Add Category</Button>
                  {showAddCategoryForm && (
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
                  )}
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
