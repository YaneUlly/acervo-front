import { getCoffeeHub, getAllComments } from '../api/coffees.api';
import { addComment, updateComment, deleteComment } from '../api/coffees.api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CoffeeDetails from '../components/CoffeeDetails';

function CoffeeHubDetails() {
  const [coffee, setCoffee] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);

  const { coffeeId } = useParams();

  const getSingleCoffee = async () => {
    try {
      const response = await getCoffeeHub(coffeeId);
      console.log(response.data);
      setCoffee(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      const response = await getAllComments(coffeeId);
      console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddComment = async e => {
    try {
      e.preventDefault();
      await addComment(coffeeId, { content: newComment });
      setNewComment('');
      getComments();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatedComment = async (commentId, updatedComment) => {
    try {
      await updateComment(commentId, { content: updatedComment });
      setEditingCommentId(null);
      getComments();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComment = async commentId => {
    try {
      await deleteComment(commentId);
      getComments();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleCoffee();
    getComments();
  }, []);

  return (
    <div>
      {coffee && (
        <div>
          <CoffeeDetails
            coffeeId={coffee._id}
            coffeeName={coffee.coffeeName}
            region={coffee.region}
            country={coffee.country}
            roast={coffee.roast}
            caffeine={coffee.caffeine}
            method={coffee.method}
            varieties={coffee.varieties}
            altitude={coffee.altitude}
            process={coffee.process}
            aromas={coffee.aromas}
            flavor={coffee.flavor}
            body={coffee.body}
            recipe={coffee.recipe}
            description={coffee.description}
            share={coffee.share}
            storeUrl={coffee.storeUrl}
            image={coffee.coffeeImgUrl}
            route='CoffeeHub'
          />
        </div>
      )}
      {comments.length > 0 && (
        <div>
          <h2>Comments</h2>
          <form onSubmit={handleAddComment}>
            <input
              type='text'
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
            />
            <button type='submit'>Add comment</button>
          </form>
          {comments.map(comment => (
            <div key={comment._id}>
              <h3>{comment.user.name}</h3>
              <img src={comment.user.photoUrl} />
              {editingCommentId === comment._id ? (
                <div>
                  <input
                    type='text'
                    defaultValue={comment.content}
                    onChange={e => setNewComment(e.target.value)}
                  />
                  <button
                    onClick={() =>
                      handleUpdatedComment(comment._id, newComment)
                    }
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <p>{comment.content}</p>
                  <button onClick={() => setEditingCommentId(comment._id)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteComment(comment._id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CoffeeHubDetails;
