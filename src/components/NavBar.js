import React from 'react';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant ="dark">
                <Navbar.Brand href='#home'>
                    <strong>CustomSpotify</strong>
                </Navbar.Brand>
                <Navbar.Brand href='#playlists' className="ml-auto">
                    <em>Playlists</em>
                </Navbar.Brand>
                <div className="ml-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search features"/>
                        <Button>Search</Button>
                    </Form>
                </div>
                <div className="loginButton">
                    <Button>Login</Button>
                </div>
            </Navbar>
        )
    }
}

export default NavBar;