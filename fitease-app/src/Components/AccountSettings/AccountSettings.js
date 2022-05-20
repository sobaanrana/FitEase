import React from 'react'
import HeaderBanner from '../HeaderBanner/HeaderBanner'

const AccountSettings = () => {
  return (
    <div>
      <HeaderBanner
        title={'Account Settings'}
        headline={'Here you can change your account settings'}
        displayType={'block'}
      />
      THIS IS ACCOUNT SETTINGS OF LOGGED IN USER
    </div>
  )
}

export default AccountSettings
