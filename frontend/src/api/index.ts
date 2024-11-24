import axios from 'axios';
import { Params, PlaceData } from '../types';

export const api = axios.create({ baseURL: 'http://localhost:4001' });

export const getPlaces = (params?: Params) =>
  api.get('/api/places', { params }).then((res) => res.data.places);

export const createPlace = (body: PlaceData) => api.post('/api/places', body);

export const getPlace = (id: string) =>
  api.get(`/api/place/${id}`).then((res) => res.data.place);

export const deletePlace = (id: string) => api.delete(`/api/place/${id}`);
