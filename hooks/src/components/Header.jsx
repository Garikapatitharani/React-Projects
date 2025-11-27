// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Header() {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg bg-primary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <Link class="nav-link active" aria-current="page" to="/useState">useState</Link>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//       </form>
//     </div>
//   </div>
// </nav>

//     </div>
//   )
// }


import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">Hooks</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/useState">
                  useState
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/login">
                  Login
                </Link>
              </li>  
                   <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/useEffect">
                  useEffect
                </Link>
              </li>
                <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/useMemo">
                  useMemo
                </Link>
              </li>
                <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/useCallback">
                  usecallback
                </Link>
              </li>
                <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/useRef">
                  useRef
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/useReducer">
                  useReducer
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/game">
                  Game
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/theme">
                  Theme
                </Link>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
