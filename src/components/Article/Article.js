/*
 * Copyright 2020 Acoustic, L.P.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

import React, { useEffect, useRef } from 'react';
import wchUIExt from '@ibm-wch/ui-extensions';

import { renderImage, formatDate, renderFormattedText } from './utils';
import './styles.scss';

// offset (in px) for better UX during preview
const PREVIEW_OFFSET = 50;

const Article = ({ content }) => {
  const articleRef = useRef(null);
  const articleHeightMemo = useRef(0);

  useEffect(() => {
    // wait for retrieving of images inside formatted text
    setTimeout(() => {
      const articleHeight = articleRef?.current?.offsetHeight;
      if (articleHeight && articleHeight !== articleHeightMemo.current) {
        articleHeightMemo.current = articleHeight;
        wchUIExt.requestResizeFrame(articleHeight + PREVIEW_OFFSET);
      }
    }, 1000);
  }, [content, articleRef]);

  const { elements, lastModified } = content;

  return (
    elements && (
      <div className="article" ref={articleRef}>
        <div className="header">
          <h1>{elements.travelArticleTitle?.value}</h1>
          <div className="details">
            <span>{elements.articleAuthor?.value}</span>
            <span>{lastModified && formatDate(lastModified)}</span>
          </div>
        </div>
        <section>
          {renderImage(elements)}
          {renderFormattedText(elements.travelArticleText?.value)}
        </section>
      </div>
    )
  );
};

export default Article;
