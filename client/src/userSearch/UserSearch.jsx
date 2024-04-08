// src/components/UserSearch.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsers } from '../slice/user.slice';

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user?.users);

  const handleSearch = () => {
    dispatch(searchUsers(`search=${searchTerm}`));
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {users?.map((user) => (
          <li key={user?._id}>{user?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserSearch;
