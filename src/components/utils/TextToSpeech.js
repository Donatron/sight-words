import React, { useState } from 'react';
import { Row, Col, Input } from 'reactstrap';
import { useSpeechSynthesis } from 'react-speech-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const TextToSpeech = ({ text }) => {
  const { speak } = useSpeechSynthesis();
  const [rate, setRate] = useState(1);

  const speakText = () => {
    speak({
      text,
      rate
    });
  }

  const handleSliderChange = (e) => {
    setRate(e.target.value)
  }

  return (
    <Row className="text-to-speech">
      <Col xs={12} className="text-to-speech_contents">
        <FontAwesomeIcon
          icon={faVolumeUp}
          onClick={speakText}
        />
        <Input
          type="range"
          value={rate}
          min="0.5"
          max="2"
          step="0.1"
          onChange={e => handleSliderChange(e)}
          className="text-to-speech_range"
        />
      </Col>
    </Row>
  )
}

export default TextToSpeech;