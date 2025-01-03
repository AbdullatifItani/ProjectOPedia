import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationApi = createApi({
    "reducerPath": "api",
     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
     endpoints: (builder) => ({
        //QUERY -> GET
        //MUTATION -> POST/PUT/DELETE
        getAllDestination: builder.query({
            query: () => "destination",
          }),
     })
})

export const { useGetAllDestinationQuery } = destinationApi;