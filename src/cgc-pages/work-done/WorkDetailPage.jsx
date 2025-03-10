import { dd2, workDoneDetail } from '@/api/actions'
import { workDetailsFilterConfig } from '@/config/QuickFilters'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    FormControl,
    FormLabel,
    FormSelect,
    Row,
  } from "react-bootstrap";
import UpdateWork from './UpdateWork';

const WorkDetailPage = () => {
    const {id} = useParams()
    const [workDetails,setWorkDetails] = useState('')
    const [subLocationDDOpt, setSubLocationDDOpt] = useState("");
    useEffect(() => {
        workDoneDetail(id).then((res) => {
            if(res?.data){
                // dd2(res.data.year).then((res1) => {
                //       const a = [];
                //       if (res1.data?.results) {
                //         res1.data.results.map((obj) => {
                //           const b = {
                //             label: obj.name,
                //             value: obj.id,
                //           };
                //           a.push(b);
                //           if(obj1.id == res.data.location){
                //             res.data.location = obj.name
                //           }
                //         });
                //         setSubLocationDDOpt(a);
                //       }
                //     });
                    setWorkDetails(res.data)
            }
        })
    },[])
  return (
    <>
      <Row>
        <Col lg="12">
          <Card className="m-2">
          <CardHeader style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
              <CardTitle>Work Done Details</CardTitle>
              {workDetails && (
                    <UpdateWork workDetails={workDetails} setWorkDetails={setWorkDetails} />
                )}
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="6">
                  {workDetailsFilterConfig.fields.map((each) => {
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
                              defaultValue={workDetails[each.id]}
                              id={each.id}
                              readOnly={!each.edit}
                              disabled={!each.edit}
                            />
                          </Col>
                        </Row>
                      );
                    } else if (each.type == "textarea") {
                      return (
                        <Row className="mb-3">
                          <FormLabel
                            htmlFor={each.id}
                            className="col-sm-2 col-form-label text-end"
                          >
                            {each.label}
                          </FormLabel>
                          <Col sm="10">
                            <p>{workDetails[each.id]}</p>
                            {/* <FormControl
								as="textArea"
								defaultValue={workDetails[each.id]}
								id={each.id}
								readOnly={!each.edit}
							  /> */}
                          </Col>
                        </Row>
                      );
                    }
                    <Row className="mb-3">
                      <Col></Col>
                      <Col sm="10">
                        <Button onClick={updateStatus}>Save Status</Button>
                      </Col>
                    </Row>;
                  })}
                </Col>
                {/* <Col lg='6'>
                
                </Col> */}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default WorkDetailPage