// Import the React and ReactDOM libraries
import React from 'react';
import { render } from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


// Create a react component
const App = () => {
    return (
        <>
            <div className="ui container comments">
                <ApprovalCard >
                    Are you sure you want to do this???
                </ApprovalCard>

                <ApprovalCard >
                    <CommentDetail author='Sam' timeAgo="Today at 4:45PM" imageUrl={faker.image.avatar()} > This is awesome </CommentDetail>
                </ApprovalCard>
                <ApprovalCard >
                    <CommentDetail author='Rijan' timeAgo="Today at 2:00AM" imageUrl={faker.image.avatar()} > This is Fantasitc </CommentDetail>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail author='Roshan' timeAgo="Yesterday at 5:00PM" imageUrl={faker.image.avatar()} > I really enjoyed </CommentDetail>
                </ApprovalCard>
            </div>
        </>

    );
};


// Take the react component and show it on the screen
render(<App />, document.querySelector('#root'));