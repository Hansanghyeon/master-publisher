import React from 'react';
import { withKnobs, text, date } from '@storybook/addon-knobs';
// components
import CenterWrap from '@/wrap/Center';
import NotionStyleListItem from '@/listItem/NotionStyle';
import PostCard from '.';

export default {
  title: 'components/Card/Post',
  component: PostCard,
  decorators: [
    withKnobs,
    (storyFn: any) => <CenterWrap>{storyFn()}</CenterWrap>,
  ],
};

export const standard = () => {
  const imgSrc = text(
    'Img Src',
    'https://source.unsplash.com/collection/9711119',
  );
  const excerpt = text(
    'excerpt',
    'Id incididunt id exercitation adipisicing nostrud. Laborum est laboris nulla exercitation nisi dolor. Consequat dolore nisi tempor ea laborum ipsum aute et aliquip cupidatat. Dolor ipsum minim sunt laborum proident consequat consectetur ullamco in ipsum eu deserunt laboris. Minim sint reprehenderit ullamco dolor reprehenderit laborum nulla excepteur eiusmod. Commodo cupidatat culpa in sunt aliqua proident cupidatat deserunt nisi fugiat. Sint ea non sit deserunt aliqua occaecat excepteur in tempor reprehenderit duis fugiat incididunt anim.',
  );
  const _date = date('Date', new Date());
  const footer = () => <NotionStyleListItem>Category</NotionStyleListItem>;
  const props = { imgSrc, excerpt, date: _date, footer };
  return <PostCard {...props} />;
};
