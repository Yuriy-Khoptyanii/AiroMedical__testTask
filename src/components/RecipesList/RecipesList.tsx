import './ResipesList.scss';

import { FC, MouseEvent, useState } from 'react';

import useRecipesStore from '../../store';
import RecipeMoreInfo from '../RecipeMoreInfo/RecipeMoreInfo';

const columnName = ['select', 'ID', 'Name', 'Image', 'First brewed'];

const RecipesList: FC = () => {
  const recipes = useRecipesStore((state) => state.recipes);
  const setRecipes = useRecipesStore((state) => state.setRecipes);
  const setPage = useRecipesStore((state) => state.setPage);
  const [selectedItemIds, setSelectedItemIds] = useState<number[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleRowContextMenu = (
    event: MouseEvent<HTMLTableRowElement>,
    idItem: number,
  ) => {
    event.preventDefault();
    if (event.button === 2) {
      if (selectedItemIds.includes(idItem)) {
        const newIds = selectedItemIds.filter((id) => id !== idItem);
        setSelectedItemIds(newIds);
      } else {
        setSelectedItemIds((prev) => [...prev, idItem]);
      }
    }
  };

  const handleDeleteRecipes = () => {
    const actualRecipes = recipes.filter(
      (recipe) => !selectedItemIds.includes(recipe.id),
    );
    setRecipes(actualRecipes);
    setSelectedItemIds([]);

    if (actualRecipes.length === 0) {
      setPage(1);
    }
  };

  const handleRowClick = (row: Recipe) => {
    setSelectedRecipe(row);
  };

  return !selectedRecipe ? (
    <table className="table">
      <thead>
        <tr className="table__row table__row--header">
          {columnName.map((name) => {
            return (
              <th key={name} className="table__row__colName">
                {name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {recipes.slice(0, 15).map((row) => (
          <tr
            key={row.id}
            className="table__row"
            onClick={() => handleRowClick(row)}
            onContextMenu={(event) => handleRowContextMenu(event, row.id)}
          >
            <td className="table__row__strName">
              <input
                type="checkbox"
                checked={selectedItemIds.includes(row.id)}
                readOnly
              />
            </td>
            <td className="table__row__strName">{row.id}</td>
            <td className="table__row__strName">{row.name}</td>
            <td className="table__row__strName">
              <img
                src={row.image_url}
                alt="imageBeer"
                className="table__row__strName--img"
              />
            </td>
            <td className="table__row__strName">{row.first_brewed}</td>
          </tr>
        ))}
      </tbody>

      {selectedItemIds.length > 0 && (
        <button
          type="button"
          className="delete_btn"
          onClick={() => handleDeleteRecipes()}
        >
          DELETE
        </button>
      )}
    </table>
  ) : (
    <RecipeMoreInfo
      selectedRecipe={selectedRecipe}
      closeModal={() => setSelectedRecipe(null)}
    />
  );
};

export default RecipesList;
