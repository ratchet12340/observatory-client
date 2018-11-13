<template>
  <div class="container">
  	<h2>Delete Account</h2>
  	<hr>
  	<div class="card">
  		<div class="card body">

	        <div class="m-3">

	        	<p>
	        		Are you sure you want to do this?
	        		<br>
	        		<strong>Deleting your account is permanent</strong>
	        		<br>
	        		<em>If you will no longer be using it, or are leaving RCOS, you should instead make yourself a past developer.</em>
	        		<br>
	        	</p>

	            <button type="submit" class="btn btn-danger">Delete account</button>
	      
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


