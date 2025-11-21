import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://your-graphql-endpoint.com/graphql' }), // Replace with your actual GraphQL endpoint
  cache: new InMemoryCache(),
});

// GraphQL Mutation for creating demo request
const CREATE_DEMO_REQUEST = gql`
  mutation CreateDemoRequest($input: CreateDemoRequestInput!) {
    createDemoRequest(input: $input) {
      _id
      firstName
      lastName
      email
      phoneNumber
    }
  }
`;

// Function for chat-based demo request
export async function sendDemoRequestFromChat({ name, email, phoneNumber }: { name: string; email: string; phoneNumber: string }) {
  // Split name into first and last name
  const nameParts = name.trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  const input = {
    firstName,
    lastName,
    email,
    phoneNumber,
    formType: 'SpaceField', // Adjust as needed
  };

  try {
    const { data } = await client.mutate({
      mutation: CREATE_DEMO_REQUEST,
      variables: { input },
    });
    return (data as any).createDemoRequest;
  } catch (error) {
    console.error('Error creating demo request:', error);
    throw error;
  }
}
