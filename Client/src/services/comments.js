import { makeRequest } from "./makeRequest";

export function createComment({ postId, message, ParentID }) {
  return makeRequest(`posts/${postId}/comments`, {
    method: "POST",
    data: { message, ParentID },
  });
}

export function updateComment({ postId, message, id }) {
  return makeRequest(`posts/${postId}/comments/${id}`, {
    method: "PUT",
    data: { message },
  });
}
export function deleteComment({ postId, id }) {
  return makeRequest(`posts/${postId}/comments/${id}`, {
    method: "DELETE",
  });
}
