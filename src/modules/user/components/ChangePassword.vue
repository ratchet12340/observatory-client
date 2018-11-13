<template>
  <div class="container mb-5">
  	<h2>Change Password</h2>
  	<hr>
  	<div class="card">
  		<div class="card body">
	        <div class="m-3">
	          <form action="#">
	            <div class="form-group">
	              <label>Current Password</label>
	              <input type="text" class="form-control">
	            </div>
	            <div class="form-group">
	              <label for="email">New Password</label>
	              <input type="email" class="form-control">
	            </div>
	            <div class="form-group">
	              <label for="glogin">Re-type Password</label>
	              <input type="password" class="form-control">
	            </div>
	            <button type="submit" class="btn btn-default">Save changes</button>
	          </form> 
	        </div>
  	    </div>
  	</div>
  </div>
</template>

<script>
export default {
  props: ['currentUser']
}
</script>


