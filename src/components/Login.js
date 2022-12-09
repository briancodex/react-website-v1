import React from 'react'

const Login = () => {
  return (
    <div id="id01" class="modal">
        <span onclick="document.getElementId('id01').style.display='none'" class="close" title="Close Model">&times;</span>

        <form class="model-content animate" action="/">
          <div class="img container">

          </div>
          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <button type="submit">Login</button>
            <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me</input>
           </label>
          </div>
          <div class="container">
            <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
            <span class="psw">Forgot <a href="/">password?</a></span>
         </div>

        </form>


      </div>
  )
}

export default Login