import React from 'react';
import Axios from 'axios'
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';


class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        console.log(event);

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }

            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    }
    render() {

        return (
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <FormLabel htmlFor="full-name">Full Name</FormLabel>
                            <FormControl id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormControl id="email" name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <FormControl id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                        </FormGroup>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>

                </Content>
            </div>
        );
    }
}

export default ContactPage;