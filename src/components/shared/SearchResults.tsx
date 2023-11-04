import React from 'react'
import {Models} from 'appwrite'
import Loader from './Loader'
import GridPostList from './GridPostList';
import { searchPosts } from '@/lib/appwrite/api';
// import GridPostList from './GridPostList'

type SearchResultProps={
  isSearchFetching:boolean;
  searchedPosts:Models.Document[];

}

const SearchResults=({isSearchFetching,searchedPosts}:
  SearchResultProps)=>{
    if(isSearchFetching)return <Loader/>

    if (searchedPosts  && searchedPosts.documents.length>0){
      return(
        <GridPostList posts={searchPosts.documents}/>
      )
    }
    return(
      <p className='w-full mt-10 text-center text-light-4'>No results found</p>
    )
  }



export default SearchResults
