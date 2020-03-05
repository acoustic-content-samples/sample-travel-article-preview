/*
 * Copyright 2020 Acoustic, L.P.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

import React from 'react';

import { BASE_URL } from 'api/endpoints';

export const renderFormattedText = value => {
  if (!value) {
    return null;
  }

  const html = value.replace(
    new RegExp('/api/authoring', 'g'),
    `${BASE_URL}/authoring`
  );

  return (
    <div
      className="articleContent"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

//get Date string in MMM DD YYYY format
const getFormattedDate = dateString =>
  dateString
    .split(' ')
    .slice(1)
    .join(' ');

export const formatDate = date =>
  getFormattedDate(new Date(date).toDateString());

export const renderImage = elements => {
  return elements?.travelArticleImage?.asset?.resourceUri ? (
    <img
      src={`${BASE_URL}${elements.travelArticleImage.asset.resourceUri}`}
      alt={elements?.travelArticleImage?.asset?.altText ?? 'image'}
    />
  ) : null;
};
