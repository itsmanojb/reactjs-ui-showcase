import React from 'react';
import useFetch from '../hooks/useFetch';
import TweetCard from './TweetCard';
import LoadingSpinner from './LoadingSpinner';

// static data
import { DummyPosts } from '../lib/Posts';
const API_FALLBACK = true;

const Feed = () => {
  const { response, loading, error } = useFetch('posts');

  if (loading) {
    return (
      <div className="h-40 py-4 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    // if json-server unavailable / fails, use fallback
    if (API_FALLBACK) {
      const allPosts = DummyPosts;
      return (
        <div className="space-y-4">
          {allPosts.map((post, i) => (
            <PostCard key={i} data={post} />
          ))}
        </div>
      );
    }
    return (
      <div className="h-[450px] flex flex-col items-center justify-center">
        <p className="text-base text-neutral-700">Failed to load posts</p>
        <small className="text-sm text-neutral-400">Try again later</small>
      </div>
    );
  }

  if (response) {
    const allPosts = response;
    return (
      <div className="mb-10">
        {allPosts.map((post, i) => (
          <TweetCard key={i} data={post} />
        ))}
      </div>
    );
  }

  return null;
};

export default Feed;
