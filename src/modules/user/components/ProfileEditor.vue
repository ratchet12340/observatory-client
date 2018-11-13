<template>
  <div class="container mb-5">
  	<h2>Edit Profile</h2>
    <hr>
  	
  	<div class="card">
  		<div class="card body">

        <div class="m-3">

          <form action="#">
            <div class="form-group">
              <label for="email">Name</label>
              <input type="text" class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control"placeholder="name@gmail.com">
            </div>
            <div class="form-group">
              <label for="glogin">Github Login</label>
              <input type="password" class="form-control" placeholder="username">
            </div>
            <div class="form-group">
              <label for="bio">Bio</label>
              <textarea class="form-control"></textarea>
            </div>

            <div class="checkbox">
              <label>Active Developer <input type="checkbox"></label>
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

<style>

</style>


