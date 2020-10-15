import React, { useContext } from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import CollectionsContext from "../../contexts/collections/collectionsContext";
import "./collection.styles.scss";

const CollectionPage = ({ match }) => {
  // what we pass in is the context we want to use
  const collections = useContext(CollectionsContext);
  // what we're getting back is our collections obj
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
// });

export default CollectionPage;
