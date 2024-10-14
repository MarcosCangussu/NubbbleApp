import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>;

export function PostBottom({author, text, commentCount}: Props) {
  let commentText = getCommentText(commentCount);
  if (commentCount === 0) {
    commentText = '';
  } else if (commentCount === 1) {
    commentText = 'Ver comentário';
  } else {
    commentText = `Ver ${commentCount} comentários`;
  }

  return (
    <Box marginTop="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text marginTop="s8" preset="paragraphSmall" bold color="greenPrimary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'Ver comentário';
  } else {
    return `Ver ${commentCount} comentários`;
  }
}
