import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPostAndUsers } from "../../actions";
import { appState, postType } from "../../utils/types";

import "./PostList.css";
import UserHeader from "./UserHeader";

type Props = {
  fetchPostAndUsers: Function;
  posts: postType[];
};

type State = {};

class PostList extends Component<Props, State> {
  state = {};

  componentDidMount() {
    this.props.fetchPostAndUsers();
  }

  renderList() {
    const arr = [...this.props.posts];
    return arr.map((post: postType, index: number) => {
      return (
        <div className="list-item-container" key={post.id}>
          <div className="list-item">
            <div className="list-item-icon">
              <img
                alt="User Logo"
                src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
              />
            </div>
            <div className="list-item-content">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <UserHeader userId={post.userId} />
            </div>
          </div>
          {index + 1 !== this.props.posts.length && <hr />}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="posts-container">
        <h2>PostList</h2>
        {this.props.posts && this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: appState) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostAndUsers })(PostList);
