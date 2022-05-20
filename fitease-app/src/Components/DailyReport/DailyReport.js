import React from 'react'
import { Field, Form, Formik } from 'formik'

const DailyReport = () => {
  return (
    <div>
      DailyReport - Here come a form with validation - exercise + diet
      checkboxes - 2 approaches either we set two field straight away or all the
      exercises with checkboxes and diet check boxes as breakfast, lunch and
      dinner
      <Formik
        initialValues={{ exercise: '', diet: '' }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ values }) => (
          <Form>
            <label>
              {/*<Field type='checkbox' name='exercise' value='true' /> checkboxes does not works this way in formik*/}
              <Field
                name='exercise'
                type='checkbox'
                render={({ field, form }) => {
                  {
                    /*console.log('field', field)*/
                  }
                  return (
                    <input type='checkbox' checked={field.value} {...field} />
                  )
                }}
              />
              Exercise
            </label>
            <br />
            <label>
              <Field
                name='diet'
                type='checkbox'
                render={({ field, form }) => {
                  return (
                    <input type='checkbox' checked={field.value} {...field} />
                  )
                }}
              />
              Diet
            </label>

            <br />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default DailyReport
