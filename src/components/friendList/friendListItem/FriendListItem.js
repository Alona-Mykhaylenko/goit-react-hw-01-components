import React from "react";
import {
  item,
  picture,
  userName,
  green,
  red,
} from "./friendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={item}>
      <div className={isOnline ? green : red}></div>
      <img className={picture} src={avatar} alt="" width="48" />
      <p className={userName}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
