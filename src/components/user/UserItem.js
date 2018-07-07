import React from 'react';
import Avatar from 'material-ui/Avatar';
import SocialPerson from 'material-ui/svg-icons/social/person';
import {lightBlack} from 'material-ui/styles/colors';
import {ListItem} from 'material-ui/List';

import Divider from 'material-ui/Divider';

export const UserItem = ({ user, onItemClick }) =>
    <div>
      <Divider inset={true} />
      <ListItem
          onClick={() => onItemClick(user)}
          leftAvatar={<Avatar icon={<SocialPerson />} />}
          primaryText={(user.isAdmin === "1") ? `${user.firstName} (admin)` : user.firstName}
          secondaryText={
            <p>
              <span style={{color: lightBlack}}>{user.email}</span><br/>
              <span style={{color: lightBlack}}>{user.contactNo}</span><br/>
            </p>
          }
          secondaryTextLines={2}
      />
      <Divider inset={true} />
    </div>;
