import Comment from "./Comment";

const comments = [
  {
    name: "허유미",
    comment: "Hi",
  },
  {
    name: "김유빈",
    comment: "Hello",
  },
  {
    name: "김수경",
    comment: "Bye",
  },
  {
    name: "박채연",
    comment: "Hi",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment name={comment.name} comment={comment.comment} />
      ))}
    </div>
  );
}

export default CommentList;
