import React, { memo, useState } from 'react'

export default memo(function Nav(props) {
  const[tc,setTC]=useState("dark")
  const textcolor = () =>{
    if (props.modee === "dark"){
        setTC("dark")
        
    }else if (props.modee ==="light"){
        setTC("light")
        
    }
  }
    return (
    
      <> 
      <nav className={`navbar navbar-expand-lg bg-${props.modee}` } data-bs-theme={(props.modee === "dark")?"dark":"light"}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.india}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/">Action</a></li>
          <li><a className="dropdown-item" href="/">Another action</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="/">Something else here</a></li>
        </ul>
        </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      <div class={`form-check form-switch text-${tc} mx-2`}>
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.tog} onChange={textcolor} />
        <label class="form-check-label" for="flexSwitchCheckChecked">Enable {tc} mode</label>
      </div>
      </div>
      </div>
      </nav>
      </>
    
  )
})
