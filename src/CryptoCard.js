import React from 'react';
import { Card, Row, Col, Modal, Button } from 'antd';

import { useSelector, useDispatch } from 'react-redux';

const { Meta } = Card;

const CryptoCard = () => {
  const dispatch = useDispatch();
  const appInfo = useSelector((state) => state?.appInfo || []);

  const modelDescription = (message) => {
    if (message && message !== '') {
      Modal.info({
        content: message,
        title: 'Description',
      });
    }
  };

  //console.log('plus value ');
  return (
    <React.Fragment>
      <Row style={{ marginBottom: 32 }}>
        <Col
          lg={{ offset: 22 }}
          xs={{ offset: 16 }}
          md={{ offset: 21 }}
          sm={{ offset: 20 }}
        >
          <Button
            type="primary"
            onClick={() => {
              dispatch({ type: 'DATA_FETCHED', data: false });
            }}
          >
            refresh
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {appInfo instanceof Array &&
          appInfo.length > 0 &&
          appInfo.map((value, index) => {
            const description = value?.collection['description'] || '';
            const imageUrl = value['image_preview_url'];
            return (
              <Col
                key={value.id}
                lg={{ span: 5, offset: 1 }}
                xs={{ span: 20, offset: 2 }}
                md={{ span: 7, offset: 1 }}
                sm={{ span: 11, offset: 1 }}
              >
                <Card
                  key={value?.id || index}
                  hoverable
                  style={{
                    width: '100%',
                  }}
                  cover={<img alt={value['name']} src={imageUrl} />}
                >
                  <Meta title={value['name']} />
                  <br />
                  {description && description !== '' && (
                    <Button
                      type="dashed"
                      size="small"
                      onClick={() => modelDescription(description)}
                    >
                      Description
                    </Button>
                  )}
                </Card>
              </Col>
            );
          })}
      </Row>
    </React.Fragment>
  );
};

export default React.memo(CryptoCard);
