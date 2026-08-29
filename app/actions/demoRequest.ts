'use server';

import { client } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

const CREATE_DEMO_REQUEST = gql`
  mutation CreateDemoRequest($input: CreateDemoRequestInput!) {
    createDemoRequest(input: $input) {
      _id
      firstName
      lastName
      email
      company
      phoneNumber
      companySize
      projectDetails
      formType
    }
  }
`;

export interface DemoRequestInput {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phoneNumber: string;
  companySize?: string;
  projectDetails?: string;
  formType?: string;
}

export async function submitDemoRequest(input: DemoRequestInput) {
  try {
    const result = await client.mutate({
      mutation: CREATE_DEMO_REQUEST,
      variables: { input },
    });
    return { success: true, data: result.data };
  } catch (error) {
    console.error('Error submitting demo request:', error);
    return { success: false, error: 'Failed to submit demo request. Please try again.' };
  }
}
