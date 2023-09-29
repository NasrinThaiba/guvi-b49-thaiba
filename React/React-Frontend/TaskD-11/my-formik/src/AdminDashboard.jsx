import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  title: '',
  author: '',
  isbn: '',
  publicationDate: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  isbn: Yup.string().required('ISBN is required'),
  publicationDate: Yup.date().required('Publication Date is required'),
});

function AdminDashboard() {
  const [books, setBooks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if (editIndex !== null) {
        // Edit existing book
        const updatedBooks = [...books];
        updatedBooks[editIndex] = values;
        setBooks(updatedBooks);
        setEditIndex(null);
      } else {
        // Add new book
        setBooks([...books, values]);
      }
      formik.resetForm();
    },
  });

  const handleEdit = (index) => {
    const bookToEdit = books[index];
    formik.setValues(bookToEdit);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div>


      <h2>Book Records</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
        </div>

        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.author}
          />
          {formik.touched.author && formik.errors.author ? (
            <div>{formik.errors.author}</div>
          ) : null}
        </div>

        <div>
          <label>ISBN:</label>
          <input
            type="text"
            name="isbn"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.isbn}
          />
          {formik.touched.isbn && formik.errors.isbn ? (
            <div>{formik.errors.isbn}</div>
          ) : null}
        </div>

        <div>
          <label>Publication Date:</label>
          <input
            type="date"
            name="publicationDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.publicationDate}
          />
          {formik.touched.publicationDate && formik.errors.publicationDate ? (
            <div>{formik.errors.publicationDate}</div>
          ) : null}
        </div>

        <div>
          <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
        </div>
      </form>

      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author},{' '}
            <strong>ISBN:</strong> {book.isbn}, <strong>Publication Date:</strong>{' '}
            {book.publicationDate}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
