import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <div>
        hi from the header class,Name-Suketh.K.Srivatsan,PES University,Electrical and Electronics Engineering
        My college ID number is PES1UG19EE111
        welcome to my files
        this is my props output-{props.name} {props.title}
    </div>
  )
}
Header.defaultProps={
    name:"Sukke",title:"qqcpresident"
}
Header.propTypes={
    title:PropTypes.string.isRequired,
}

export default Header
