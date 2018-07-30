import React from 'react';
import PropTypes from 'prop-types';

// import { Link } from 'react-router';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
    marginTop: 10
};

const SignIn = ({onSubmit, onChange, errors, user, successMsg}) => (
    <div>
        <Card className='container'>
            <CardContent>
                <form action='/' onSubmit={onSubmit}>

                    <h2 className='card-header'>Sign In</h2>

                    {/* {successMessage && <p className='success-message'>{successMessage}</p>}
                    {errors.summary && <p className='error-message'>{errors.summary}</p>} */}

                    <div className='field-line'>
                        <TextField
                        label = 'Email'
                        name='email'
                        // errorText={errors.email}
                        // onChange={onChange}
                        // value={user.email}
                        />
                    </div>

                    <div className='field-line'>
                        <TextField
                        label='Password'
                        type='password'
                        name='password'
                        // errorText={errors.password}
                        // onChange={onChange}
                        // value={user.password}
                        />
                    </div>

                    <div>
                        <Button className='button-line' style={styles} variant='raised'>
                        Sign In
                        </Button>
                    </div>
            
                    <p className='card-footer'>Don't have an account?
                    {/* <Link to={'/signup'}>Sign Up</Link> */}
                    </p>
                </form>
            </CardContent>
        </Card>
    </div>
);

SignIn.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    successMsg: PropTypes.string.isRequired
};

export default SignIn;