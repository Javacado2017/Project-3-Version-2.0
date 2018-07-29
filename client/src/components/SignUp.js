import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
    marginTop: 10
};

const SignUp = ({onSubmit, onChange, errors, user}) => (
    <div>
        <Card className='container'>
            <CardContent>
                <form action='/' onSubmit={onSubmit}>

                    <h2 className='card-header'>Create an Account</h2>

                    {errors.summary && <p className='error-message'>{errors.summary}</p>}

                    <div className='field-line'>
                        <TextField
                          label = 'First Name'
                          name='first name'
                          errorText={errors.firstname}
                          onChange={onChange}
                          value={user.firstname}
                        />
                    </div>

                    <div className='field-line'>
                        <TextField
                          label = 'Last Name'
                          name='last name'
                          errorText={errors.lastname}
                          onChange={onChange}
                          value={user.lastname}
                        />
                    </div>

                    <div className='field-line'>
                        <TextField
                        label = 'Email'
                        name='email'
                        errorText={errors.email}
                        onChange={onChange}
                        value={user.email}
                        />
                    </div>

                    <div className='field-line'>
                        <TextField
                        label='Password'
                        type='password'
                        name='password'
                        errorText={errors.password}
                        onChange={onChange}
                        value={user.password}
                        />
                    </div>

                    <div>
                        <Button className='button-line' style={styles} variant='raised'>
                        Create an Account
                        </Button>
                    </div>
            
                    <p className='card-footer'>Already have an account?<Link to={'/signin'}>Sign In</Link></p>
                </form>
            </CardContent>
        </Card>
    </div>
);

SignUp.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUp;