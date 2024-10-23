import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base query configuration
const baseQuery = fetchBaseQuery({

  baseUrl:import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const service = createApi({
  reducerPath: "service",
  baseQuery,
  tagTypes:["Project"],
  endpoints: (builder) => ({
  
    userLogin: builder.mutation({
      query: (user) => ({
        url: "users/login",
        method: "POST",
        body: user,
      }),
    }),
  
    addProject: builder.mutation({
      query: (projectData) => ({
        url: "projects/",
        method: "POST",
        body: projectData,
      }),
      invalidatesTags: ["Project"],

    }),
    viewProject: builder.query({
      query: (activeTab) => ({
        url: `projects/?=${activeTab}`,
        method: "GET",
       
      }),    
    }),
    viewProjectById: builder.query({
      query: (projectId) => ({
        url: `projects/${projectId}`,
        method: "GET",
       
      }),    
    }),
    updateProject: builder.mutation({
      query: ({formData, projectId}) => ({
        url: `projects/${projectId}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["Project"],

    }),
    deleteProject: builder.mutation({
      query: (projectId) => ({
        url: `projects/${projectId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useAddProjectMutation, 
  useViewProjectQuery,
  useDeleteProjectMutation,
  useViewProjectByIdQuery,
  useUpdateProjectMutation
} = service;
