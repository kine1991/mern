import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { AuthorCardContainer, ImageContainer, ContentContainer, Image, AuthorName, AuthorDate, AuthorAbout } from './author-card.styles';

export const AuthorCard = ({ author }) => {
  const history = useHistory();
  return (
    <AuthorCardContainer onClick={() => history.push(`/authors/${author._id}`)}>
      <ImageContainer>
        {author.imageUrl ? (
          <Image src={author.imageUrl} />
        ) : (
          <Image src="https://s.gr-assets.com/assets/nophoto/user/u_200x266-e183445fd1a1b5cc7075bb1cf7043306.png" />
        )}
      </ImageContainer>
      <ContentContainer>
        <AuthorName><strong>name: </strong>{author.name}</AuthorName>
        {author.born ? <AuthorDate><strong>born: </strong>{moment(Date.parse(author.born)).format('MM.DD.YYYY')}</AuthorDate> : null}
        {author.died ? <AuthorDate><strong>died: </strong>{moment(Date.parse(author.died)).format('MM.DD.YYYY')}</AuthorDate> : null}
        {/* // {author.died ? <AuthorDate>{moment(dateDied).format('MM/DD/YYYY')}</AuthorDate> : null} */}

        {author.about
          ? [
              author.about.length > 200 ? (
                <AuthorAbout key={author._id}><strong>about: </strong>{author.about.slice(0, 200)}...</AuthorAbout>
              ) : (
                <AuthorAbout key={author._id}><strong>about: </strong>{author.about}</AuthorAbout>
              )
            ]
          : null}
      </ContentContainer>
    </AuthorCardContainer>
  );
};

export default AuthorCard;
