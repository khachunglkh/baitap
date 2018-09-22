import React, {Component} from 'react';
import { } from 'react-native';
const apiGetAllFoods ='https://jsonplaceholder.typicode.com/posts';
async function getPostFromServer() {
  try {
    let response = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
    let responseJson = await response.json();
    console.log('333');

    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
export {getPostFromServer};
