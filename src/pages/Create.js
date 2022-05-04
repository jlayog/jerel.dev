import { getDatabase, ref, set } from "firebase/database";

function writePostData(postId, title, content, coverImage) {
  const db = getDatabase();
  set(ref(db, 'posts/' + postId), {
    postId: postId,
    email: email,
    profile_picture : imageUrl
  });
}