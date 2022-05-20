import React, { useState } from 'react'
import './FAQs.css'

import 'antd/dist/antd.min.css'

import { Collapse } from 'antd'
import HeaderBanner from '../HeaderBanner/HeaderBanner'
const { Panel } = Collapse
const FAQs = ({ displayBanner }) => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <div className=' faqPage '>
      {displayBanner && (
        <HeaderBanner
          title={'FAQs'}
          headline={'You will get answers to your questions :)'}
          displaType={'block'}
        />
      )}
      <div className='container faqs'>
        <div className='row'>
          <div className='col-lg-1 col-md-12'></div>
          <div className='col-lg-4 faqRightImg'>
            <div>
              <img src='./questionfaq.png' width={'50%'} alt='images' />{' '}
            </div>
          </div>
          <div className='col-lg-7 col-md-12'>
            {' '}
            <Collapse defaultActiveKey={[]} className='panel'>
              <Panel header='Do I Need to Work Out Every Day?' key='1'>
                <p>
                  No, you do not need to work out every day. In fact, in most
                  cases, I would recommend at least 1-2 days of total rest a
                  week.
                </p>
              </Panel>
              <Panel
                header='What’s the Best Diet for My Fitness Goals?'
                key='2'
              >
                <p>
                  Your diet plays a huge role in the overall success of your new
                  routine. Regardless of your goals, it’s important to give your
                  body the fuel and energy it needs to crush and recover from
                  your workouts.
                </p>
              </Panel>
              <Panel header='How do I know which diet is right for me?' key='3'>
                <p>
                  In general, a Mediterranean diet is recommended to help
                  prevent and manage chronic disease. However, there is no one
                  diet that can meet the needs of everyone.{' '}
                </p>
              </Panel>
              <Panel header='How many times a day should I be eating?' key='4'>
                <p>
                  Again, this varies and depends on your goals, medical needs,
                  etc. For example, recent studies suggest that intermittent
                  fasting may be beneficial for weight loss and longevity.{' '}
                </p>
              </Panel>
              <Panel header='Should I count calories?' key='5'>
                <p>
                  I don't generally recommend this. Being more mindful about
                  what you eat and why you're eating can help with weight
                  management.{' '}
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs
