import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Button } from 'reactstrap';


const NoItems = ({ type, redirectTo }) => {
  const { t } = useTranslation();
  const typeString = type.split(' ').join('-');

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col xs={12} >
          <h2>{t('you-dont-have-any')} {t(typeString)}</h2>
          <Button color="primary" className="btn-no-items">
            <Link to={`/${redirectTo}`}>{t('add')} {t(typeString)}</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NoItems;