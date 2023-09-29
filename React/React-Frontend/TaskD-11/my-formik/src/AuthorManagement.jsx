import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  birthDate: '',
  biography: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Author name is required'),
  birthDate: Yup.date().required('Birth Date is required'),
  biography: Yup.string().required('Biography is required'),
});

function AuthorManagement() {
  const [authors, setAuthors] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if (editIndex !== null) {
        // Edit existing author
        const updatedAuthors = [...authors];
        updatedAuthors[editIndex] = values;
        setAuthors(updatedAuthors);
        setEditIndex(null);
      } else {
        // Add new author
        setAuthors([...authors, values]);
      }
      formik.resetForm();
    },
  });

  const handleEdit = (index) => {
    const authorToEdit = authors[index];
    formik.setValues(authorToEdit);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedAuthors = [...authors];
    updatedAuthors.splice(index, 1);
    setAuthors(updatedAuthors);
  };

  return (
    <div>
      <h2>Author Records</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Author Name:</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label>Birth Date:</label>
          <input
            type="date"
            name="birthDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthDate}
          />
          {formik.touched.birthDate && formik.errors.birthDate ? (
            <div>{formik.errors.birthDate}</div>
          ) : null}
        </div>

        <div>
          <label>Biography:</label>
          <input
            type="text"
            name="biography"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.biography}
          />
          {formik.touched.biography && formik.errors.biography ? (
            <div>{formik.errors.biography}</div>
          ) : null}
        </div>

        <div>
          <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
        </div>
      </form>

      <ul>
        {authors.map((author, index) => (
          <li key={index}>
            <strong>Name:</strong> {author.name}, <strong>Birth Date:</strong> {author.birthDate}, <strong>Biography:</strong> {author.biography}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorManagement;
