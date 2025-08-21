import React from 'react';
import { Todo } from '../../types/Todo';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo;
  users: User[];
};

export const TodoInfo: React.FC<Props> = ({ todo, users }) => {
  const user = users.find(currentUser => currentUser.id === todo.userId);

  return (
    <article
      data-id={todo.id}
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {user ? (
        <UserInfo user={user} />
      ) : (
        <span className="UserInfo">Unknown user</span>
      )}
    </article>
  );
};
