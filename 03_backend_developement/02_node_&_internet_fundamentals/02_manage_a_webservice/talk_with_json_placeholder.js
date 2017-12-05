const request = require("request");

function fetchPosts(callback) {
  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function fetchPostByUser(userId, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/?userId=${userId}`,
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function fetchPost(id, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${id}`,
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function fetchUsers(callback) {
  request(
    {
      url: "http://jsonplaceholder.typicode.com/users/",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function fetchUser(userId, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/users/${userId}`,
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function fetchComments(callback) {
  request(
    {
      url: "http://jsonplaceholder.typicode.com/comments",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function fetchCommentsByPost(postId, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function publishPost(userId, title, body, callback) {
  request(
    {
      url: "http://jsonplaceholder.typicode.com/posts",
      method: "POST",
      form: {
        userId: "2",
        title: "title",
        body: "body"
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function publishComment(postId, name, email, body, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/comments?postId=${postId}`,
      method: "POST",
      form: {
        name: "name",
        email: "email",
        body: "body",
        postId: "2"
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function updatePostTitle(postId, newTitle, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
      method: "PUT",
      form: {
        title: "title"
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function updatePostBody(postId, newBody, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
      method: "PUT",
      form: {
        body: "body"
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function updatePost(postId, newTitle, newBody, callback) {
  request(
    {
      url: `http://jsonplaceholder.typicode.com/posts/${postId}`,
      method: "PUT",
      form: {
        title: "title",
        body: "body"
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

module.exports = {
  fetchPosts: fetchPosts,
  fetchPostByUser: fetchPostByUser,
  fetchPost: fetchPost,
  fetchUsers: fetchUsers,
  fetchUser: fetchUser,
  fetchComments: fetchComments,
  fetchCommentsByPost: fetchCommentsByPost,
  publishPost: publishPost,
  publishComment: publishComment,
  updatePostTitle: updatePostTitle,
  updatePostBody: updatePostBody,
  updatePost: updatePost
};
