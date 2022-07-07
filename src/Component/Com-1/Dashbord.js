import React from 'react'
import './dash.css'


const Dashbord = () =>{
    return(
        <>
        
{/* <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Notifications</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Switch account</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2 search1" type="text" placeholder="Search" aria-label="Search"/>
        </form>
        <button class="btn7 btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
</nav> */}

<div class="nav-scroller bg-white box-shadow">
      <nav class="nav nav-underline">
        <a class="nav-link active" href="#">Dashboard</a>
        <a class="nav-link" href="#">
          Friends
          <span class="badge badge-pill bg-light align-text-bottom">27</span>
        </a>
        <a class="nav-link" href="#">Explore</a>
        <a class="nav-link" href="#">Suggestions</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
      </nav>
    </div>

   
    <div className='dashcon'>
        <div className='container'>
<div className='dashfle'>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Get User Details and List</h5>
        <p class="card-text">user name id loginstatus address details and wishlist and Orders.</p>
        <button className='sub' type='button'>submit</button>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Product_Details and Stacks</h5>
        <p class="card-text">Product Quantities, Available Stacks and New Stack Enquiry.</p>
        <button className='sub' type='button'>submit</button>
      </div>
    </div>
  </div>
</div>
</div>
<div className='dashfle'>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Branchers and Distributes</h5>
        <p class="card-text">Get Branche and Distributes Details and Enquiry.</p>
        <button className='sub' type='button'>submit</button>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button className='sub' type='button'>submit</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
    </div>
    </>
    )
}


export default Dashbord