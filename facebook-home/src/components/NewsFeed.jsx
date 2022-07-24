import useFetch from '../hooks/useFetch';

// static data
import { DummyPosts } from '../lib/Posts';
import PostCard from './PostCard';
const API_FALLBACK = true;

const Skeleton = () => {
  return (
    <div className="space-y-4">
      {[...Array(2)].map((_, i) => (
        <div className="_card h-[250px] rounded-lg" key={i}>
          <div className="p-4 flex gap-2 items-center animate-pulse">
            <div className="h-10 w-10 bg-gray-200 dark:bg-neutral-700 rounded-full"></div>
            <div className="flex flex-col gap-2">
              <div className="h-3 bg-gray-200 dark:bg-neutral-700 rounded-full w-36"></div>
              <div className="h-3 bg-gray-200 dark:bg-neutral-700 rounded-full w-24"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const NewsFeed = () => {
  const { response, loading, error } = useFetch('posts');

  if (loading) {
    return <Skeleton />;
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
      <div className="h-[250px] flex flex-col items-center justify-center">
        <p className="text-base _text__default">Failed to load posts</p>
        <small className="text-sm _text__muted">Try again later</small>
      </div>
    );
  }

  if (response) {
    const allPosts = response;
    return (
      <div className="space-y-4">
        {allPosts.map((post, i) => (
          <PostCard key={i} data={post} />
        ))}
      </div>
    );
  }

  return null;
};

export default NewsFeed;
