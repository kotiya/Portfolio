function Avatar() {
  return (
    <Col md={4} className="myAvtar">
      <Tilt>
        <img src={myImg} className="img-fluid" alt="avatar" />
      </Tilt>
    </Col>
  );
}
