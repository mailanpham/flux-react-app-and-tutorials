var CommentBox = React.createClass({displayName: "CommentBox",
   render: function() {
       return (
           React.createElement("div", {className: "commentBox"}, 
               "Hello, world! I am a CommentBox."
           )
       );
   }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);


//var CommentList = React.createClass({
//   render: function() {
//       <div className="commentList">
//           <Comment author="Pete Hunt">This is one comment</Comment>
//           <Comment author="Jordan Walke">This is *another* comment</Comment>
//       </div>
//   }
//});
//
//var CommentForm = React.createClass({
//    render: function() {
//        <div className="commentForm">
//            Hello, world! I am a CommentForm.
//        </div>
//    }
//});
//
//
//var Comment = React.createClass({
//    render: function() {
//        return (
//            <div className="comment">
//                <h2 className="commentAuthor">
//                {this.props.author}
//                </h2>
//                {marked(this.props.children.toString())}
//            </div>
//        );
//    }
//});