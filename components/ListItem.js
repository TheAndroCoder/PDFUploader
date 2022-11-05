import React from 'react'

const ListItem = ({name,url}) => {
  return (
    <>
        <p>Name : {name}</p>
        URL: <a target="_blank" href={url}>{url}</a>
    </>
  )
}

export default ListItem