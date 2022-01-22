import React, { useState } from 'react';
import Navbarlogin from '../component/Navbarlogin'
import '../App.css'

export default function LOGIN(props) {
  return (

    <div>
      <Navbarlogin />
      <div className="login flex flex-col w-full justify-center text-center lg:text-left lg:w-2/3">
        <button className='btn btn-light rounded-pill p-3' onClick={() => { props.setIsLogin(true) }}>
          <img src="https://media.discordapp.net/attachments/695119707010891796/932949647360684063/kisspng-google-logo-google-search-google-images-g-suite-google-adwords-5b5695e501bbf6.0297111215324011250071.png?width=869&height=633" width="55" height="40" />
          <a>  Sign in with Google</a>
        </button>
      </div>
    </div>
  )
}
