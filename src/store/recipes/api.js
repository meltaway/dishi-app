import apiClient from './../../utils/apiClient';
import {RECIPES_ENDPOINTS, HTTP_METHODS} from './../../constants';

const {GET_RECIPES_LIST, GET_RECIPE} = RECIPES_ENDPOINTS;

const {GET} = HTTP_METHODS;

const getRecipe = ({id}) =>
  apiClient.request({
    method: GET,
    url: GET_RECIPE(id),
  });

const getRecipeList = ({data}) =>
  apiClient.request({
    method: GET,
    url: GET_RECIPES_LIST,
    data: data,
  });

const api = {getRecipeList, getRecipe};

export default api;
