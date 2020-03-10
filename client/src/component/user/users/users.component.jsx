import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import {
  getAllUsersAsync,
  clearUsers
} from '../../../redux/profile/profile.action';

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

// eslint-disable-next-line no-shadow
const UsersComponent = ({ users, getAllUsers, clearUsers }) => {
  const history = useHistory();
  React.useEffect(() => {
    getAllUsers();

    return () => {
      clearUsers();
      console.log('clearUsers');
    };
  }, []);

  React.useEffect(() => {
    console.log(users);
    console.log(users);
  }, [users]);

  if (!users) return <h5>loading...</h5>;
  return (
    <UsersContainer>
      <Title>
        <span>All Users:</span>
        <span> </span>
        {users.data.results}
      </Title>
      {users.data.data.users.map(user => (
        <UserContainer key={user._id}>
          <UserPhotoContainer>
            {user.photo ? (
              <UserPhoto src={user.photo} />
            ) : (
              <UserPhoto src="https://i.ibb.co/VWnsKfS/user0.jpg" />
            )}
          </UserPhotoContainer>
          {/* UserPhotoContainer */}
          <UserInfo>
            <Name onClick={() => history.push(`/users/${user._id}`)}>
              {user.name}
            </Name>
            <Email>{user.email}</Email>
          </UserInfo>
        </UserContainer>
      ))}
    </UsersContainer>
  );
};

const mapStateToProps = state => ({
  users: state.profile.users
});

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => dispatch(getAllUsersAsync()),
  clearUsers: () => dispatch(clearUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
