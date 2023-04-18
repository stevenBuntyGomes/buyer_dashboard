import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { ProductListDesc, ProductListTitle } from '../../../../Constant';
// import ProductTableData from './ProductTableData';
import { Card, CardBody, Col, Container, Row, CardHeader, FormGroup, Label, Input } from 'reactstrap';
import HeaderCard from '../../../Common/Component/HeaderCard';
// import {Btn} from '../../../AbstractElements'
import {Btn} from '../../../../AbstractElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faExclamation, faFile, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { API_ENDPOINT } from '../../../../Route/Routes';
import DataTable from 'react-data-table-component';
// import { Row, Col, Card, CardBody, FormGroup, Label, Input } from 'reactstrap';
// import { Default, Disabled, Checked, Option, CustomCheckbox, CheckboxStates, InlineCheckbox, SuccessState, BrandState, PrimaryState } from '../../../../';
import { ExistingSupplierColumns, ReadyToSellSupplierColumns, readyToSellData, ExistingSupplierData } from './SupplierTableList';


const ReadyToSellSupplier = () => {
  return (
    <Fragment>
      <Breadcrumbs parent={`${API_ENDPOINT}/app/ecommerce/new-supplier/Dubai`} title="Ready To Sell" mainTitle="Ready To Sell" />
      <CardHeader className='pt-0'>
        <Row>
          <Col xl = "8">
            <Btn link = {`${API_ENDPOINT}/app/ecommerce/edit-product/Dubai`} attrBtn={{ color: "primary", className: "m-r-15", type: "submit" }} >
                <FontAwesomeIcon className='me-2' icon={faPenSquare}/> Edit
            </Btn>
            <Btn attrBtn={{ color: "danger", className: "m-r-15", type: "submit" }} >
                <FontAwesomeIcon className='me-2' icon={faExclamation}/> Delete
            </Btn>
            <Btn link = {`${API_ENDPOINT}/app/ecommerce/create-product/Dubai`} attrBtn={{ color: "success", className: "m-r-15", type: "submit" }} >
                <FontAwesomeIcon className='me-2' icon={faThumbsUp}/> Approve
            </Btn>
            <Btn attrBtn={{ color: "danger", className: "m-r-15", type: "submit" }} >
                <FontAwesomeIcon className='me-2' icon={faThumbsDown}/> Reject
            </Btn>
          </Col>
          <Col xl = "4">
            <FormGroup className=''>
                    <Input className="form-control" type="text" placeholder="Search" />
                </FormGroup>
          </Col>
        </Row>
    </CardHeader>
      <CardBody>
          <div className='table-responsive product-table'>
              <DataTable noHeader pagination paginationServer columns={ReadyToSellSupplierColumns} data={readyToSellData} highlightOnHover={true} striped={true} responsive={true} />
          </div>
          {/* <ProductTableData /> */}
      </CardBody>
    </Fragment>
  )
}

export default ReadyToSellSupplier