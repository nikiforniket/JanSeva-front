import { getSectorForScheme, updateSchemeDetails } from '@/api/actions';
import { useToggle } from '@/hooks';
import React, { useEffect, useState } from 'react'
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

const UpdateScheme = ({id,schemeDetails,setSchemeDetails}) => {
    const [reqBody,setReqBody] = useState(schemeDetails)
    const [sectorDD,setSectorDD] = useState('')
    const { isOpen: defaultModalOpen, toggle: defaultModalToggle } = useToggle();
    const [defaultValSecDD,setDefaultValSecDD] = useState('')
    useEffect(() => {
        getSectorForScheme().then((res) => {
              const a = [];
              if (res.data?.results) {
                res.data.results.map((obj) => {
                  const b = {
                    label: obj.name,
                    value: obj.id,
                  };
                  a.push(b);
                  if(obj.id==schemeDetails['sector']){
                    setDefaultValSecDD(b)
                  }
                });
                setSectorDD(a);
              }
            });
    },[])

    const handleUpdateScheme = async() => {
        const res = await updateSchemeDetails(id,reqBody)
        setSchemeDetails(res.data)
        defaultModalToggle()
    }



  return (
    <>
        <Button variant="de-primary" size="md" onClick={defaultModalToggle}>Update Scheme</Button>

        <Modal
        show={defaultModalOpen}
        onHide={defaultModalToggle}
        className="fade"
        id="exampleModalDefault"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalDefaultLabel"
        aria-hidden="true"
      >
        <ModalHeader>
          <h6 className="modal-title m-0" id="exampleModalDefaultLabel">
            Update Scheme
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
              Name
            </FormLabel>
            <Col sm="10">
              <FormControl
                type="text"
                  defaultValue={schemeDetails['name']}
                // value={schemeDetails['name']}
                //   id={id}
                onChange={(e) => setReqBody({...reqBody, name:e.target.value})}
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
                defaultValue={defaultValSecDD}
                options={sectorDD}
                onChange={(value) =>setReqBody({ ...reqBody, sector: value.value })}
              />
              </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel
            //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Year of Launch
            </FormLabel>
            <Col sm="10">
              <FormControl
                type="text"
                  defaultValue={schemeDetails['year']}
                value={reqBody['year']}
                //   id={id}
                onChange={(e) => setReqBody({...reqBody, year:e.target.value})}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel
            //   htmlFor={id}
              className="col-sm-2 col-form-label text-end"
            >
              Is Active
            </FormLabel>
            <Col sm="10">
            <Select
                defaultValue={schemeDetails['is_active'] ? {
                    label:'True',
                    value:true
                }:{
                    label:'False',
                    value:false
                }}
                options={[
                    {
                        label:'True',
                        value:true
                    },
                    {
                        label:'False',
                        value:false
                    }
                ]}
                onChange={(value) => setReqBody({ ...reqBody, is_active: value.value })}
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button variant="de-secondary" size="sm" onClick={defaultModalToggle}>
            Close
          </Button>
          <Button onClick={handleUpdateScheme} variant="de-primary" size="sm">
            Update Scheme
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default UpdateScheme