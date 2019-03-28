import React, { Component } from "react";
import Comment from "./components/Comment";
import faker from "faker";
import ApprovalCard from "./components/Approvalcard";

class App extends Component {
  render() {
    return (
      <div className="ui comments">
        <ApprovalCard>
          <Comment
            imageSource={faker.image.avatar()}
            commentDate={"Today at 5:42PM"}
            commentBody={"How artistic!"}
            authorName={"Mark"}
          />
        </ApprovalCard>

        <ApprovalCard>
          <Comment
            imageSource={faker.image.avatar()}
            commentDate={"Today at 5:42PM"}
            commentBody={"How artistic!"}
            authorName={"John"}
          />
        </ApprovalCard>

        <ApprovalCard>
          <Comment
            imageSource={faker.image.avatar()}
            commentDate={"Today at 5:42PM"}
            commentBody={"How artistic!"}
            authorName={"Sam"}
          />
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
