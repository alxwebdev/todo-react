import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TodoForm = ({ addTodo }) => {
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');

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
      addTodo(values.title, values.description);
      resetForm();
    },
    validationSchema,
  });

  // const changeTitleHandler = val => {
  //   setTitle(val.target.value);
  // };
  // const changeDescriptionHandler = val => {
  //   setDescription(val.target.value);
  // };

  // const submitHandler = event => {
  //   addTodo(title, description);
  //   event.preventDefault();
  //   event.target.reset();
  //   setTitle('');
  //   setDescription('');
  // };

  return (
    <div className='form-container'>
      <form className='form' onSubmit={formik.handleSubmit}>
        <input
          type='text'
          placeholder='title...'
          name='title'
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched && formik.errors.title ? (
          <div className='form-errors'>{formik.errors.title}</div>
        ) : null}
        <input
          type='text'
          placeholder='description...'
          name='description'
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched && formik.errors.description ? (
          <div className='form-errors'>{formik.errors.description}</div>
        ) : null}
        <button type='submit' className='btn btn-add'>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
