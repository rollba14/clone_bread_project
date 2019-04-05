import React from 'react'

const InputFormatHint = () => {
  return(
    <div className='input_format_hint'>
      <ul>
        <li>Only number(s) (0-9), a single dot (.), and optional comma(s) (,) are accepted in custom amount.</li>
        <li>Letters a-z, A-Z and other special characters are NOT accepted in custom amount.</li>
        <li>Comma(s) cannot appear after the dot (.).</li>
        <li>No white spaces are accepted between numbers.</li>
      </ul>
    </div>
  )
}

export default InputFormatHint;
