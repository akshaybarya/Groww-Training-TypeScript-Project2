import React, { Component } from "react";
import { connect } from "react-redux";
import { appState, userType } from "../../utils/types";

type Props = {
  userId: number;
  user: userType;
};

type State = {};

export class UserHeader extends Component<Props, State> {
  render() {
    if (!this.props.user) {
      return null;
    }
    return <p>User Header: {this.props.user.name}</p>;
  }
}

const mapStateToProps = (State: appState, ownProps: { userId: number }) => {
  return { user: State.users.find((temp) => temp.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
