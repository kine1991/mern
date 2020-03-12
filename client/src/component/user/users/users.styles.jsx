import styled from 'styled-components';

export const UsersContainer = styled.div`
  margin: auto auto;
  max-width: 760px;
  min-height: 50vh;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 24px;
  margin-bottom: 2rem;
`;

export const UserPhotoContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 2rem;
`;

export const UserPhoto = styled.img`
  width: 100%;
  height: 100%;
`;

export const UserContainer = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #f6f6f6;
  margin-bottom: 1rem;
  cursor: pointer;
`;
export const UserInfo = styled.div`
  /* display: flex; */
`;

export const Name = styled.div`
  font-size: 16px;
  transition: all 0.3s;
  &:hover {
    color: #b28451;
  }
  text-transform: uppercase;
  cursor: pointer;
`;

export const Email = styled.div`
  font-size: 14px;
`;
