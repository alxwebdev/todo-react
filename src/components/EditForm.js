import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditForm = ({ editTodo, todoTitle, id }) => {
  const validationSchema = Yup.object({
    title: Yup.string().min(3, 'Min. 3 characters').required('Required'),
    description: Yup.string()
      .min(10, 'Min. 10 characters')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: (values, { resetForm }) => {
      editTodo(id, values.title, values.description);
      resetForm();
    },
    validationSchema,
  });

  return (
    <div className='form-container form-edit'>
      <h3> Edit: "{todoTitle}"</h3>
      <form className='form' onSubmit={formik.handleSubmit}>
        <input
          type='text'
          placeholder='title...'
          name='title'
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched && formik.errors.title ? (
          <div className='form-errors'>{formik.errors.title}</div>
        ) : null}
        <input
          type='text'
          placeholder='description...'
          name='description'
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched && formik.errors.description ? (
          <div className='form-errors'>{formik.errors.description}</div>
        ) : null}
        <button className='btn btn-edit'>Submit Edit</button>
      </form>
    </div>
  );
};

export default EditForm;
