import React from 'react';

import { AuthorStatsContainer, ItemsStat, Item,ItemField, ItemValue, GenreContainer, Genre } from './author-stats.styles';

const AuthorStats = ({ books }) => {
  const allPages = books.reduce((acc, cur) => {
    return acc + cur.pages;
  }, 0);
  const minPrice = books.reduce((acc, cur) => {
    if (acc === 0) return cur.price;
    return Math.min(acc, cur.price);
  }, 0);
  const maxPrice = books.reduce((acc, cur) => {
    return Math.max(acc, cur.price);
  }, 0);
  const uniqueGenre = books.reduce((acc, cur) => {
    if (acc.includes(cur.genre)) {
      return acc;
    }
    return [...acc, cur.genre];
  }, []);

  return (
    <AuthorStatsContainer>
      <ItemsStat>
        <Item>
          <ItemField>count</ItemField>
          <ItemValue>{books.length}</ItemValue>
        </Item>
        <Item>
          <ItemField>all pages</ItemField>
          <ItemValue>{allPages}</ItemValue>
        </Item>
        <Item>
          <ItemField>avarage pages</ItemField>
          <ItemValue>{Math.floor(allPages / books.length)}</ItemValue>
        </Item>
        <Item>
          <ItemField>max price</ItemField>
          <ItemValue>{maxPrice}</ItemValue>
        </Item>
        <Item>
          <ItemField>min price</ItemField>
          <ItemValue>{minPrice}</ItemValue>
        </Item>
      </ItemsStat>
      <GenreContainer>
        {uniqueGenre.map(genre => (
          <Genre key={genre}>{genre}</Genre>
        ))}
      </GenreContainer>
    </AuthorStatsContainer>
  );
};

export default AuthorStats;
