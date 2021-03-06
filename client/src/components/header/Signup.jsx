import React from 'react';
import firebase from 'firebase';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      fullname: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.emailAndPassAuth = this.emailAndPassAuth.bind(this);
    this.googleAuth = this.googleAuth.bind(this);
  }

  googleAuth(provider) {
    this.props.googleSignUp(provider)
  }

  emailAndPassAuth(e) {
    e.preventDefault();
    this.props.emailAndPassSignUp(this.state.username, this.state.password, this.state.fullname, this.state.email);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
      [evt.target.name]: evt.target.value,
      [evt.target.name]: evt.target.value,
      [evt.target.name]: evt.target.value,
    })
  }

  render() {
    return (
      // button for Register
      <div className="wrapper pt-2">
        {/* Creates button for SignUp */}
          <a className="btn clr py-2" id="auth-btn" data-toggle="modal" data-target="#signUp" >Sign Up</a>
        <div className="container">
        </div>

        {/* MODAL: Creates popup for SignUp */}
        <div className="modal fade" id="signUp" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content form-elegant">

              {/* MODAL: header */}
              <div className="modal-header text-center">
                {/* Creates close button for popup */}
                <h4 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Register With</strong></h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              </div>

              {/* MODAL: Body */}
              <div className="modal-body mx-4">
                <div className="md-form mb-5">
                  <input type="username" id="Form-username-signup" className="form-control validate" name="username" onChange={this.handleChange}/>
                  <label data-error="wrong" data-success="right" htmlFor="Form-username-signup">Your username</label>
                </div>
    
                <div className="md-form pb-3">
                    <input type="password" id="Form-pass-signup" className="form-control validate" name="password" onChange={this.handleChange}/>
                    <label data-error="wrong" data-success="right" htmlFor="Form-pass-signup">Your password</label>
                </div>

                <div className="md-form mb-5">
                  <input type="username" id="Form-fullname-signup" className="form-control validate" name="fullname" onChange={this.handleChange}/>
                  <label data-error="wrong" data-success="right" htmlFor="Form-username-signup">Your fullname</label>
                </div>

                <div className="md-form mb-5">
                  <input type="username" id="Form-email-signup" className="form-control validate" name="email" onChange={this.handleChange}/>
                  <label data-error="wrong" data-success="right" htmlFor="Form-username-signup">Your email</label>
                </div>
    
                <div className="text-center mb-3">
                    {/* Button to make post request */}
                    <button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a" onClick={(e) => {this.emailAndPassAuth(e)}} 
                            data-dismiss="modal"
                    >Register</button>
                </div>
              </div>

               <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Register with:</p>
    
               <div className="row my-3 d-flex justify-content-center social">
                   {/* Button to SignUp with google*/}
                   <button type="button" className="btn btn-white btn-rounded z-depth-1a" data-dismiss="modal" aria-hidden="true" onClick={this.googleAuth.bind(this, new firebase.auth.GoogleAuthProvider())}>
                     <i className="fa fa-google-plus"></i>
                   </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;