import { getCoffeeHub, getAllComments } from '../api/coffees.api';
import { addComment, updateComment, deleteComment } from '../api/coffees.api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import CoffeeDetails from '../components/CoffeeDetails';
import {
  Input,
  Text,
  Button,
  Flex,
  Divider,
  Avatar,
  Box,
} from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { format } from 'date-fns';

function CoffeeHubDetails() {
  const [coffee, setCoffee] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingCommentContent, setEditingCommentContent] = useState('');

  const { coffeeId } = useParams();

  const { user } = useContext(AuthContext);

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

  const handleUpdatedComment = async commentId => {
    try {
      await updateComment(commentId, { content: editingCommentContent });
      setEditingCommentId(null);
      setEditingCommentContent('');
      getComments();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComment = async commentId => {
    try {
      console.log('Deleting comment with ID:', commentId);
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
      <Breadcrumb
        marginLeft='50px'
        fontSize='14px'
        marginTop={{ base: '3vh', md: '4vh', lg: '5vh', xl: '10vh' }}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/coffeehub'>Coffee Hub</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
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
      <div>
        <Text
          fontSize='2xl'
          fontWeight='700'
          align='left'
          marginLeft={{ base: '50px', lg: '205px', xl: '205px' }}
          marginTop={{ base: '90px', lg: '120px' }}
          marginBottom='30px'
        >
          Comments
        </Text>
        <Flex
          justifyContent='center'
          flexDirection='column'
          marginBottom={{ md: '50px', lg: '60px', xl: '100px' }}
          marginLeft={{ base: '50px', lg: '205px' }}
        >
          <form onSubmit={handleAddComment}>
            <Input
              type='text'
              placeholder='Add a comment...'
              backgroundColor='#FADCAF'
              borderColor='#0B0B03'
              width={{ base: '220px', md: '430px', lg: '600px', xl: '800px' }}
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
            />
            <Button
              type='submit'
              marginLeft='15px'
              width={{ md: '10%' }}
              variant='outline'
              colorScheme='#028AEB'
              color='#0B0B03'
              _hover={{
                bgColor: '#0B0B03',
                color: '#FFEFD6',
              }}
            >
              Post
            </Button>
          </form>
        </Flex>
      </div>
      {comments.length === 0 && (
        <Text
          align={{ base: 'left', md: 'center' }}
          width={{ base: '50%', md: '100%' }}
          marginTop='20px'
          marginBottom='100px'
          marginLeft={{ base: '50px', md: '0' }}
          color='#0B0B03'
          fontStyle='italic'
        >
          No comments yet! Be the first to share your thoughts on this amazing
          coffee!
        </Text>
      )}
      {comments.length > 0 && (
        <div>
          <Box
            display='flex'
            marginLeft={{ base: '0px', lg: '150px', xl: '185px' }}
            flexDirection='column'
            justifyContent='center'
            marginBottom={{ base: '90px', lg: '130px', xl: '190px' }}
            width={{ base: '100%', lg: '70%' }}
          >
            {comments.map(comment => (
              <div key={comment._id}>
                <Divider
                  borderColor='#0B0B03'
                  alignSelf='center'
                  marginTop={{ base: '70px', md: '45px' }}
                  marginBottom='30px'
                  marginLeft={{ md: '50px', lg: '17px' }}
                  width={{ md: '85%', lg: '100%' }}
                />
                <Flex
                  alignItems='center'
                  margin='15px'
                  marginLeft={{ md: '50px', lg: '0', xl: '15px' }}
                >
                  <Avatar src={comment.user.photoUrl} />
                  <Flex gap={{ base: '10', xl: '650' }}>
                    <Text fontWeight='700' marginLeft='15px'>
                      {comment.user.name}
                    </Text>
                    <Text>
                      {format(new Date(comment.createdAt), 'dd/MM/yyyy HH:mm')}
                    </Text>
                  </Flex>
                </Flex>
                {editingCommentId === comment._id ? (
                  <div>
                    <Input
                      type='text'
                      defaultValue={editingCommentContent || comment.content}
                      backgroundColor='#FADCAF'
                      marginLeft='80px'
                      borderColor='#0B0B03'
                      width={{ base: '200px', xl: '700px' }}
                      onChange={e => setEditingCommentContent(e.target.value)}
                    />
                    <Button
                      onClick={() => handleUpdatedComment(comment._id)}
                      marginLeft='10px'
                      variant='outline'
                      colorScheme='#028AEB'
                      color='#0B0B03'
                      _hover={{
                        bgColor: '#0B0B03',
                        color: '#FFEFD6',
                      }}
                    >
                      Save
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Text align='left' marginLeft='80px' marginBottom='20px'>
                      {comment.content}
                    </Text>
                    {comment.user && user && user._id === comment.user._id ? (
                      <Flex
                        flexDirection='row'
                        gap={{ base: '3', xl: '6' }}
                        marginTop='30px'
                      >
                        <IconButton
                          onClick={() => handleDeleteComment(comment._id)}
                          opacity='0.6'
                          marginLeft='80px'
                          aria-label='delete'
                          variant='outline'
                          colorScheme='#028AEB'
                          color='#0B0B03'
                          _hover={{
                            bgColor: '#0B0B03',
                            color: '#FFEFD6',
                            opacity: '100%',
                          }}
                          icon={<DeleteIcon />}
                        />
                        <IconButton
                          onClick={() => setEditingCommentId(comment._id)}
                          aria-label='edit'
                          backgroundColor='#1E1E1E'
                          color='#FFEFD6'
                          icon={<EditIcon />}
                        />
                      </Flex>
                    ) : (
                      <div style={{ display: 'none' }}></div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </Box>
        </div>
      )}
    </div>
  );
}

export default CoffeeHubDetails;
