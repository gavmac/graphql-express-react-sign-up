import React, { Component } from 'react';
import { Button, Container } from 'reactstrap'


import PostViewer from './PostViewer';
import PostEditor from './PostEditor';

const config = {
    issuer: '{process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default',
    redirect_uri: window.location.origin + '/implicit/callback',
    client_id:'{process.env.REACT_APP_OKTA_CLIENT_ID}'
}

class App extends Component {
    state = {
        editing: null,
    };

    render() {
        const { editing } = this.state;

        return (
            <Container fluid>
                <Button
                    className="my-2"
                    color="primary"
                    onClick={() => this.setState({ editing: {} })}
                >
                    New Post
                </Button>
                <PostViewer
                    canEdit={() => true}
                    onEdit={(post) => this.setState({ editing: post })}
                />
                {editing && (
                    <PostEditor
                        post={editing}
                        onClose={() => this.setState({ editing: null })}
                    />
                )}
            </Container>
        );
    }
}

export default App;
