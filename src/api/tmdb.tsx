import axiosClient from "./axiosClient";

import type { Collection, ApiResponse } from "../interfaces/index";

export const collection: Collection = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
  now_playing: "now_playing",
};

const tmdbApi = {
  getMoviesList: async (type: string, params: any) => {
    const url = `movie/${collection[type]}`;
    try {
      const data = await axiosClient.get<any, ApiResponse>(url, params);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  getVideos: (id: any) => {
    const url = `movie/${id}/videos`;
    return axiosClient.get(url, { params: {} });
  },
  search: (params: any) => {
    const url = "search/movie/";
    return axiosClient.get(url, params);
  },
  detail: (id: any, params: any) => {
    const url = `movie/${id}`;
    return axiosClient.get(url, params);
  },
  credits: (id: any) => {
    const url = `movie/${id}/credits`;
    return axiosClient.get(url, { params: {} });
  },
  similar: (id: any) => {
    const url = "movie/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
