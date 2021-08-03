import html from "html-literal";

export default () => html `<form id="register" method="POST" action="">
<div>
  <label for="url">Photo URL</label>
  <input type="text" name="url" id="url" placeholder="Enter Photo URL" required>
</div>
<div>
  <label for="title">Password:</label>
  <input type="text" name="title" id="title">
</div>
<input type="submit" name="submit" value="Submit Photo">
</form>`;
