import { ErrorMessage } from 'formik'
import React from 'react'

function CustomErrMsg({ name }) {
  return (
    <div id={'ErrMsg'}>
      <ErrorMessage name={name} />
    </div>
  )
}

export default CustomErrMsg
