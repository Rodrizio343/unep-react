import Home from 'pages/Home'
import Login from 'pages/Login'
import Post from 'pages/Post'
import Register from 'pages/Register'
import React from 'react'
import { Route, Switch } from 'wouter'

const Router = () => {
  
  return (
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/login" component={Login}/> 
          <Route path="/register" component={Register}/>
          <Route path="/post/:id" component={Post}/>
        </Switch>
    )
}

export default Router
