import './login.scss'

function Login() {
    return (
        <div className="login">
            <div className="logo"><span><i>GRUVVE</i></span></div>
            <h4>Please login to access your DAO membership account</h4>
            <form>
  <label for="username">
    Username:
    </label>
    <input type="text" name="username" />
  <label for="password">
    Password:
    </label>
    <input type="password" name="password" />
  <button>Login</button>
</form>
        </div>
    )
}

export default Login