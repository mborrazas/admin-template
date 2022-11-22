import "../../assets/styles/Login.css";

function Login() {
  return (
    <>
        <header>
            <h1>Welcome back</h1>
            <p>Join the world's largest community</p>
        </header>
        <section className="recentLogins">
            <p>Recent logins</p>
            <div className="item">
                Close 
                <img src="" />
                <p>Zain Sajid</p>
            </div>
            <div className="newLogin">
                <img src="" />
                <p>Add Account</p>
            </div>
        </section>
        <hr />
        <span>or</span>
        <section className="sectionForm">
            <div className="containerForm">
                <input placeholder="Phone number, username or email" />
                <input placeholder="Password" />
            </div>
            <div className="containerOptionsForm">
                <input type="checkbox" /> <label>Remember for 30 days</label>
                <a href="">Forgot password</a>
            </div>
            <button className="buttonSubmit">Sing In</button>
            <button className="buttonNewAccount">Create New Account</button>
            <hr />
            <p>Or continue with</p>
            <p>By clicking button above, you agree to our <a className="link">terms of use</a> and <a className="link">privacy policies</a></p>
        </section>
    </>
  );
}

export default Login;


