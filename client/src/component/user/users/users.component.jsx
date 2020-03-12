import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  getAllUsersAsync,
  clearUsers
} from '../../../redux/profile/profile.action';

import {
  UsersContainer,
  Title,
  UserPhotoContainer,
  UserPhoto,
  UserContainer,
  UserInfo,
  Name,
  Email
} from './users.styles';

// eslint-disable-next-line no-shadow
const UsersComponent = ({ users, getAllUsers, clearUsers }) => {
  const history = useHistory();
  React.useEffect(() => {
    getAllUsers();

    return () => {
      clearUsers();
    };
  }, []);

  // React.useEffect(() => {
  //   console.log(users);
  // }, [users]);

  if (!users) return <h5>loading...</h5>;
  return (
    <UsersContainer>
      <Title>
        <span>All Users:</span>
        <span> </span>
        {users.data.results}
      </Title>
      {users.data.data.users.map(user => (
        <UserContainer
          key={user._id}
          onClick={() => history.push(`/users/${user._id}`)}
        >
          <UserPhotoContainer>
            {user.photo ? (
              <UserPhoto src={user.photo} />
            ) : (
              <UserPhoto src="https://i.ibb.co/VWnsKfS/user0.jpg" />
            )}
          </UserPhotoContainer>
          {/* UserPhotoContainer */}
          <UserInfo>
            <Name>{user.name}</Name>
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
