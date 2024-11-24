import React from 'react';
import Container from '../../components/container';
import { Field, Form, Formik } from 'formik';
import { initialValues, inputs } from '../../constants';
import { PlaceData } from '../../types';
import { useMutation } from '@tanstack/react-query';
import { createPlace } from '../../api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationKey: ['createPlace'],
    mutationFn: (body: PlaceData) => createPlace(body),
    onSuccess: (res) => {
      toast.success('Accommodation place created successfully');
      navigate(`/place/${res.data.place.id}`);
    },
    onError: (err) => {
      console.log(err);
      toast.error('An error occurred');
    },
  });

  const onSubmit = (values: PlaceData) => {
    const body = { ...values };

    body.amenities = (values.amenities as string).split(',');

    mutate(body);
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="max-w-2xl mx-auto grid gap-5">
          {inputs.map((item, key) => (
            <div key={key} className={'field'}>
              <label className="font-semibold">{item.label}</label>
              <Field
                type={item.type || 'text'}
                name={item.name}
                placeholder={item.placeholder}
                className={item.type !== 'checkbox' ? 'input w-full' : ''}
              />
            </div>
          ))}

          <button
            disabled={isPending}
            type="submit"
            className="my-5 bg-blue-500 py-2 px-6 text-white font-bold rounded-md transition hover:bg-blue-600"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </Container>
  );
};

export default Create;
