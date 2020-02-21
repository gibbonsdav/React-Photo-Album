import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import picname from "./picname"
import albumname from "./albumname"
import myalbums from "./myalbums"
// import ajaxcalls from "../actions/ajaxcalls"

export default function() {
  return (
    <Router>
      <div>
        <ul></ul>

        <Route exact path="/" component={myalbums} />
        <Route path="/pics/:id" component={picname} />
        <Route path="/albums/:id" component={albumname} />
      </div>
    </Router>
  )
}
