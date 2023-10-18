import React from "react";

function Form() {
  return (
    <div className="Form">
      <form id="login-form">
        <fieldset>
          <label for="email">
            Email
            <input type="text" name="email" />
          </label>
          <br />
          <label for="password">
            Password
            <input type="password" name="password" />
          </label>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
