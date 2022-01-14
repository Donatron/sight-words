import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Form, Button, } from 'reactstrap';


const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col
          xs={{ size: 10, offset: 1 }}
          lg={{ size: 6, offset: 3 }}
        >
          <Form className="site-content_content-login">
            <h3>{t('not-found')}</h3>
            <p>{t('unable-to-locate-page')} {`${process.env.PUBLIC_URL}${location.pathname}`}</p>
            <div className="">
              <Button color="secondary">
                <Link to='/'>
                  {t('return-to-home')}
                </Link>
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;