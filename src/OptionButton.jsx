import React from 'react'

const OptionButton = ({opt,onSelect}) => {
  // console.log("OptionButton rendered:", opt)

  return (
    <button id="opt" onClick={() => onSelect(opt)}>
      {opt}
    </button>
  )
}
export default React.memo(OptionButton)