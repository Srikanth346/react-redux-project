import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Modal, Button } from 'antd';

const { Meta } = Card;

const CryptoCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.opensea.io/api/v1/assets?format=json')
      .then((result) => result.json())
      .then((data) => setData(data?.assets || []));
  }, []);

  const modelDescription = (message) => {
    if (message && message !== '') {
      Modal.info({
        content: message,
        title: 'Description',
      });
    }
  };

  console.log(data);

  return (
    <React.Fragment>
      <Row gutter={[16, 16]}>
        {data instanceof Array &&
          data.length > 0 &&
          data.map((value, index) => {
            const description = value?.collection['description'] || '';
            const imageUrl = value['image_preview_url'];
            return (
              <Col span={5} offset={1}>
                <Card
                  key={index}
                  hoverable
                  style={{
                    width: 240,
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

export default CryptoCard;
