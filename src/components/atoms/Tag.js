import React from 'react';
import styled, {css} from 'styled-components/native';

import Flex from './Flex';
import Typography from './Typography';

const MAX_TAG_CHARS = 15;

const TagContainer = styled(Flex)`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.mercury};
    text-align: center;
    border-radius: 15px;
    height: 30px;
  `}
`;

const SingleTag = ({children, ...props}) => {
  return (
    <Flex grow={0}>
      <TagContainer
        row
        justifyCenter
        itemsCenter
        selfStart
        paddingX="sm"
        marginRight="sm"
        {...props}>
        {children}
      </TagContainer>
    </Flex>
  );
};

const TagsList = ({tags, renderItem, ...props}) => {
  return (
    <Flex row wrapFlex {...props}>
      {tags.map((item, index) => {
        const text =
          item?.length > MAX_TAG_CHARS
            ? `${
                item[MAX_TAG_CHARS - 1] === ' '
                  ? item.slice(0, MAX_TAG_CHARS - 1)
                  : item.slice(0, MAX_TAG_CHARS)
              }…`
            : item;
        return (
          <Flex
            marginBottom="smmd"
            grow={0}
            // eslint-disable-next-line react/no-array-index-key
            key={`tags-item-${item}-${item?.length}-${index}`}
            justifyCenter>
            <SingleTag>{renderItem(text)}</SingleTag>
          </Flex>
        );
      })}
    </Flex>
  );
};

const Tag = {
  Single: SingleTag,
  List: TagsList,
};

export default Tag;
