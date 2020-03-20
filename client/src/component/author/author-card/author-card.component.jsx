import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

export const AuthorCardContainer = styled.div`
  max-width: 760px;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 4px 6px 10px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  /* font-family: 'Roboto'; */
`;

export const ImageContainer = styled.div`
  flex: 1;
  @media (max-width: 992px) {
    flex: 2;
  }
  @media (max-width: 768px) {
    flex: 3;
  }
`;

export const ContentContainer = styled.div`
  flex: 5;
  margin-left: 2rem;
  @media (max-width: 992px) {
    flex: 7;
    margin-left: 1rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

// export const AuthorsTitle = styled.div`
//   font-size: 36px;
//   font-weight: 200;
//   font-family: 'Roboto';
//   text-align: center;
// `;

export const AuthorName = styled.div`
  color: #5c5c5c;
  font-size: 20px;
  font-weight: 300;
`;

export const AuthorDate = styled.div`
  color: #999999;
  /* color: #9e866b; */
  font-size: 14px;
`;

export const AuthorAbout = styled.div`
  /* color: black; */
  color: #999999;
  font-size: 12px;
`;

export const AuthorCard = ({ author }) => {
  return (
    <AuthorCardContainer>
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
                <AuthorAbout key={author._id}>{author.about.slice(0, 200)}...</AuthorAbout>
              ) : (
                <AuthorAbout key={author._id}>{author.about}</AuthorAbout>
              )
            ]
          : null}
      </ContentContainer>
    </AuthorCardContainer>
  );
};

export default AuthorCard;
