        <div className="field-line">
            <TextField
              label = 'First Name'
              name="first name"
              errorText={errors.firstname}
              onChange={onChange}
              value={user.firstname}
            />
          </div>

          <div className="field-line">
            <TextField
              label = 'Last Name'
              name="last name"
              errorText={errors.lastname}
              onChange={onChange}
              value={user.lastname}
            />
          </div>

          <div className="field-line">
            <TextField
              label = 'Email'
              name="email"
              errorText={errors.email}
              onChange={onChange}
              value={user.email}
            />
          </div>

          <div className="field-line">
            <TextField
              label="Password"
              type="password"
              name="password"
              onChange={onChange}
              errorText={errors.password}
              value={user.password}
            />
          </div>

          <div>
            <Button 
              className="button-line" 
              style={styles} 
              variant="raised">
                Create an Account
            </Button>
          </div>
          
          <h2 className="card-footer">Already have an account?<Link to={'/login'}>Sign In!</Link></h2>