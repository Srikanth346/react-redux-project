import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Modal, Button, Spin } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

const { Meta } = Card;

const CryptoCard = () => {
  const [refresh, setRefresh] = useState(false);
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const appInfo = useSelector((state) => state?.appInfo || []);

  useEffect(() => {
    setLoader(true);
    fetch('https://api.opensea.io/api/v1/assets?format=json')
      .then((result) => result.json())
      .then((data) => {
        dispatch({ type: 'ADD_DATA_TO_APP', data: data?.assets || [] });
      })
      .finally(() => {
        setRefresh(false);
        setLoader(false);
      });
  }, [refresh]);

  const modelDescription = (message) => {
    if (message && message !== '') {
      Modal.info({
        content: message,
        title: 'Description',
      });
    }
  };

  //console.log('plus value' + appInfo);
  return (
    <React.Fragment>
      <Spin spinner={loader}>
        <Row style={{ marginBottom: 32 }}>
          <Col
            lg={{ offset: 22 }}
            xs={{ offset: 16 }}
            md={{ offset: 21 }}
            sm={{ offset: 20 }}
          >
            <Button type="primary" onClick={() => setRefresh(true)}>
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
                  lg={{ span: 5, offset: 1 }}
                  xs={{ span: 20, offset: 2 }}
                  md={{ span: 7, offset: 1 }}
                  sm={{ span: 11, offset: 1 }}
                >
                  <Card
                    key={index}
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
      </Spin>
    </React.Fragment>
  );
};

export default CryptoCard;
