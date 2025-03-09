import axios from 'axios';

// Base URLs from your Postman collection
const BASE_URL = 'http://192.168.0.105:8080';
const USER_URL = 'http://localhost:8081';
const JOB_URL = 'http://localhost:8082';

// Create Axios instances for each service
const userApi = axios.create({
  baseURL: USER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const jobApi = axios.create({
  baseURL: JOB_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const baseApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get the access token from localStorage
const getAccessToken = () => localStorage.getItem('accessToken');

// Axios interceptor to add the Authorization header
const addAuthInterceptor = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  return instance;
};

// Apply the interceptor to authenticated APIs
const authUserApi = addAuthInterceptor(userApi);
const authJobApi = addAuthInterceptor(jobApi);
const authBaseApi = addAuthInterceptor(baseApi);

// API Functions
// Authentication
export const login = async (email, password) => {
  const response = await baseApi.post('/api/users/login', { email, password });
  const { accessToken, refreshToken } = response.data;
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  return response.data;
};

export const refreshToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const response = await baseApi.post('/api/users/refresh', { refreshToken });
  const { accessToken, refreshToken: newRefreshToken } = response.data;
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', newRefreshToken);
  return response.data;
};

// User Registration
export const registerFreelancer = async (userData) => {
  return await baseApi.post('/api/users/register-freelancer', userData);
};

export const registerBusinessOwner = async (userData) => {
  return await userApi.post('/api/users/register-business-owner', userData);
};

// User Profile
export const getOwnProfile = async () => {
  return await authUserApi.get('/api/users/me');
};

export const changePassword = async (currentPassword, newPassword) => {
  return await authUserApi.post('/api/users/change-password', { currentPassword, newPassword });
};

// Job Services (Freelancer)
export const createService = async (serviceData) => {
  return await authBaseApi.post('/api/jobs-service/services/create-new', serviceData);
};

export const getAllServices = async (params = {}) => {
  return await baseApi.get('/api/jobs-service/services', { params });
};

export const getMyServices = async () => {
  return await authBaseApi.get('/api/job-service/services/my-service');
};

export const updateService = async (serviceId, serviceData) => {
  return await authBaseApi.put(`/api/jobs-service/services/${serviceId}`, serviceData);
};

export const deleteService = async (serviceId) => {
  return await authBaseApi.delete(`/api/jobs-service/services/${serviceId}`);
};

// Job Services (Business Owner)
export const createJob = async (jobData) => {
  return await authBaseApi.post('/api/jobs-service/jobs/create-job', jobData);
};

export const getAllJobs = async (params = {}) => {
  return await baseApi.get('/api/jobs-service/jobs', { params });
};

export const updateJob = async (jobId, jobData) => {
  return await authBaseApi.put(`/api/jobs-service/jobs/${jobId}`, jobData);
};

export const deleteJob = async (jobId) => {
  return await authBaseApi.delete(`/api/jobs-service/jobs/${jobId}`);
};

// Bookmarks
export const bookmarkJob = async (jobId) => {
  return await authJobApi.post(`/api/jobs-service/job-bookmark/${jobId}`);
};

export const getSavedJobs = async () => {
  return await authJobApi.get('/api/jobs-service/job-bookmark');
};

export const deleteBookmarkJob = async (bookmarkId) => {
  return await authBaseApi.delete(`/api/jobs-service/job-bookmark/${bookmarkId}`);
};

export const bookmarkService = async (serviceId) => {
  return await authBaseApi.post(`/api/jobs-service/service-bookmark/${serviceId}`);
};

export const getSavedServices = async () => {
  return await authBaseApi.get('/api/jobs-service/service-bookmark');
};

export const deleteBookmarkService = async (bookmarkId) => {
  return await authBaseApi.delete(`/api/jobs-service/service-bookmark/${bookmarkId}`);
};

// Categories
export const getCategories = async () => {
  return await baseApi.get('/api/jobs-service/categories');
};

export const createCategory = async (categoryData) => {
  return await authBaseApi.post('/api/jobs-service/categories/create-new', categoryData);
};

export const updateCategory = async (categoryId, categoryData) => {
  return await authBaseApi.put(`/api/jobs-service/categories/${categoryId}`, categoryData);
};

export const deleteCategory = async (categoryId) => {
  return await authBaseApi.delete(`/api/jobs-service/categories/${categoryId}`);
};

// Admin
export const getAllUsersAdmin = async () => {
  return await baseApi.get('/api/admin');
};