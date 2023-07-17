import './RecipeMoreInfo.scss';

import { FC } from 'react';

type Props = {
  selectedRecipe: Recipe | null;
  closeModal: () => void;
};

const RecipeMoreInfo: FC<Props> = ({ closeModal, selectedRecipe }) => {
  if (!selectedRecipe) {
    return null;
  }

  const { id, name, description, volume } = selectedRecipe;

  return (
    <div className="wrapper-overlay">
      <table className="modal">
        <button onClick={closeModal} className="modal__close">
          X
        </button>
        <h1 className="modal__title">{name}</h1>
        <tbody className="modal__recipeInfo">
          <tr className="modal__recipeInfo__row">
            <td className="modal__recipeInfo__row--name">ID:</td>
            <td>{id}</td>
          </tr>
          <tr className="modal__recipeInfo__row">
            <td className="modal__recipeInfo__row--name">VOLUME:</td>
            <td>{`${volume.value} ${volume.unit}`}</td>
          </tr>
          <tr className="modal__recipeInfo__row">
            <td className="modal__recipeInfo__row--name">DESCRIPTION:</td>
            <td className="modal__recipeInfo__row--longRow">{description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecipeMoreInfo;
