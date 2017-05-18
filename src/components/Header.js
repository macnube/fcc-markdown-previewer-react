import React from 'react'

const Header = (props) => {
  let url = 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet'
  return (
    <div className='header-container'>
      <h1>Github Flavored Markdown Previewer</h1>
      <h3>You can see a cheat sheet <a href={url}>here</a></h3>
    </div>
  )
}

export default Header