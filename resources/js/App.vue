<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
		   <router-link to="/" class="nav-link">Home</router-link>
       
      </li>
      <li class="nav-item">
         <router-link to="/employees" class="nav-link">Employees</router-link>
      </li>
      <li class="nav-item">
         <router-link to="/users" class="nav-link">Users</router-link>
      </li>
     
    </ul>
  </div>
</nav>
<div id="app">
        <router-view />
	 </div>
</template>

