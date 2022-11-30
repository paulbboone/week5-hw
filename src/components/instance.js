import React from 'react'
import axios from 'axios'

const instance = axios.create({
    baseURL:"https://git.heroku.com/week5-hw.git"
}) 
  

export default instance
 