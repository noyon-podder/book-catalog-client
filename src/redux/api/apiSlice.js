import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["comments"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),

    createBook: builder.mutation({
      query: (data) => ({
        url: "/create_book",
        method: "POST",
        body: data,
      }),
    }),

    updateBook: builder.mutation({
      query: ({ id, ...updateBookData }) => ({
        url: `/update_book/${id}`,
        method: "PATCH",
        body: updateBookData,
      }),
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/delete_book/${id}`,
        method: "DELETE",
      }),
    }),

    commentAdd: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
    }),

    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ["comments"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useCommentAddMutation,
  useGetCommentQuery,
} = booksApi;
