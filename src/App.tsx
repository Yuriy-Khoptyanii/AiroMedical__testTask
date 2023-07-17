import './App.scss';

import { FC, useEffect } from 'react';
import SyncLoader from 'react-spinners/ClockLoader';

import RecipesList from './components/RecipesList/RecipesList';
import useRecipesStore from './store';

const App: FC = () => {
  const page = useRecipesStore((state) => state.page);
  const setRecipes = useRecipesStore((state) => state.setRecipes);
  const isLoading = useRecipesStore((state) => state.isLoading);
  const setIsLoading = useRecipesStore((state) => state.setIsLoading);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://api.punkapi.com/v2/beers?page=${page}`)
      .then((responce) => responce.json())
      .then((data) => {
        setRecipes(data);
        setIsLoading(false);
      });
  }, [page]);

  return (
    <div className="app">
      <h1 className="app_title">List of beer recipes</h1>
      {isLoading ? <SyncLoader size={48} color="#006400" /> : <RecipesList />}
    </div>
  );
};
export default App;
