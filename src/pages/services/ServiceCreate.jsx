import { createService } from 'actions/serviceActions';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

export default function ServiceCreate() {
  const [redirect, setRedirect] = useState(false);
  const { addToast } = useToasts();
  const [serviceForm, setServiceForm] = useState({
    category: 'mathematics',
    title: '',
    description: '',
    image: '',
    price: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setServiceForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createService(serviceForm);
      addToast('게시물을 등록하였습니다', { appearance: 'success', autoDismiss: true });
      setRedirect(true);
    } catch (error) {
      addToast(error.message, { appearance: 'error', autoDismiss: true });
    }
  }

  if (redirect) return <Redirect to='/' />;

  return (
    <div className='create-page'>
      <div className='container'>
        <div className='form-container'>
          <h1 className='title'>Create Service</h1>
          <form onSubmit={handleSubmit}>
            <div className='field'>
              <label className='label'>Category</label>
              <div className='control'>
                <div className='select'>
                  <select name='category' onChange={handleChange}>
                    <option value='mathematics'>Mathematics</option>
                    <option value='programming'>Programming</option>
                    <option value='painting'>Painting</option>
                    <option value='singing'>Singing</option>
                    <option value='language'>Language</option>
                    <option value='game'>Game</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='field'>
              <label className='label'>Title</label>
              <div className='control'>
                <input
                  onChange={handleChange}
                  name='title'
                  className='input'
                  type='text'
                  placeholder='Text input'
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Description</label>
              <div className='control'>
                <textarea
                  onChange={handleChange}
                  name='description'
                  className='textarea'
                  placeholder='Textarea'
                ></textarea>
              </div>
            </div>
            <div className='field'>
              <label className='label'>Image Url</label>
              <div className='control'>
                <input
                  onChange={handleChange}
                  name='image'
                  className='input'
                  type='text'
                  placeholder='Text input'
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Price per Hour</label>
              <div className='control'>
                <input
                  onChange={handleChange}
                  name='price'
                  className='input'
                  type='number'
                  placeholder='Text input'
                />
              </div>
            </div>
            <div className='field is-grouped'>
              <div className='control'>
                <button type='submit' className='button is-link'>
                  Create
                </button>
              </div>
              <div className='control'>
                <button className='button is-text'>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
