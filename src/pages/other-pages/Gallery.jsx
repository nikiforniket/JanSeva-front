import { GlightBox, PageBreadcrumb } from "@/components";
import { Button, Col, Row } from "react-bootstrap";
import smallImg1 from "@/assets/images/small/img-1.jpg";
import smallImg2 from "@/assets/images/small/img-2.jpg";
import smallImg3 from "@/assets/images/small/img-3.jpg";
import smallImg4 from "@/assets/images/small/img-4.jpg";
import smallImg5 from "@/assets/images/small/img-5.jpg";
import smallImg6 from "@/assets/images/small/img-6.jpg";
const Gallery = ({imgData}) => {
  return (
    <>
      {/* <PageBreadcrumb title="Images" subName="Pages" /> */}
      <Row id="grid" className="g-0">
		{imgData?.map((obj) => {
		return (
        <Col key={obj.id} md="4" lg="3" className="picture-item m-1">
          <GlightBox href={obj.file} className="lightbox">
            <img src={obj.file} alt="img" className="img-fluid" />
          </GlightBox>
        </Col>
		)})}
      </Row>
    </>
  );
};
export default Gallery;
