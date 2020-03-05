/*
 * Copyright 2020 Acoustic, L.P.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

import React, { useState, useEffect } from 'react';
import wchUIExt from '@ibm-wch/ui-extensions';
import Article from 'components/Article/Article';

const WchContainer = () => {
  const [content, setContent] = useState(null);

  const updateContent = () => {
    wchUIExt.getContent().then(contentData => {
      setContent(contentData);
    });
  };

  useEffect(() => {
    updateContent();
    wchUIExt.on('contentUpdate', updateContent);
    wchUIExt.requestResizeFrame(1000);
  }, []);

  return <div>{content && <Article content={content} />}</div>;
};

export default WchContainer;
