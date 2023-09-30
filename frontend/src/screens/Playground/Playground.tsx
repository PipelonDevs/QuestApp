import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import {Button} from '@mui/material';

import './Playground.css';
import sendPostRequest from '../../utils/requests';

type QuestResponse = {
  model_response: string;
};

export default function Playground() {
  const [preview, setPreview] = useState(false);
  const [quest, setQuest] = useState('');
  const [markdownText, setMarkdownText] = useState(`
  # Heading 1
  ## Heading 2
  `);

  const handleTextChange = event => {
    setMarkdownText(event.target.value);
  };

  const handlePreview = () => {
    setPreview(!preview);
  };

  const handleSubmit = async () => {
    const prefix = 'http://192.168.1.100:5001';

    const response: QuestResponse = await sendPostRequest(
      `${prefix}/generate-quest`,
      {
        prompt: '++',
      },
    );

    console.log(response.model_response);
    setQuest(response.model_response);
  };

  return (
    <>
      <div style={{margin: 15, display: 'flex', flexFlow: 'column'}}>
        {preview ? (
          <textarea
            className="markdown-textbox"
            value={markdownText}
            onChange={handleTextChange}
          />
        ) : (
          <ReactMarkdown className="markdown-textbox">
            {markdownText}
          </ReactMarkdown>
        )}
        <Button
          className="preview-edit-button"
          variant="contained"
          color="primary"
          onClick={handlePreview}>
          {preview ? 'Preview' : 'Edit'}
        </Button>
        <Button
          className="preview-edit-button"
          variant="contained"
          color="primary"
          onClick={handleSubmit}>
          Generuj zadania
        </Button>

        <p>{quest}</p>
      </div>
    </>
  );
}
