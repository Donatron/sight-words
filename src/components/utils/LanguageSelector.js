import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import ReactFlagsSelect from 'react-flags-select';

const LanguageSelector = ({ onChangeLanguage }) => {
  const [selected, setSelected] = useState('GB');

  const onSelect = (countryCode) => {
    setSelected(countryCode)
    onChangeLanguage(countryCode.toLowerCase());
  }

  return (
    <Row className="language-selector">
      <Col xs={12} className="language-selector_content">
        <ReactFlagsSelect
          selected={selected}
          countries={["GB", "TH"]}
          placeholder="Select Language"
          onSelect={onSelect}
          showSelectedLabel={false}
          showOptionLabel={false}
          customLabels={{
            "TH": { primary: "TH", secondary: "Thai" },
            "GB": { primary: "GB", secondary: "English" }
          }}
        />
      </Col>
    </Row>
  );
}

export default LanguageSelector;