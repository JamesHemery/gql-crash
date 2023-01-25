/* eslint-disable */
import { UUID } from '@/types';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  UUID: UUID;
};

export type Ad = {
  __typename?: 'Ad';
  history?: Maybe<Array<Maybe<HistoryEntry>>>;
  id: Scalars['UUID'];
};

export type HistoryEntry = {
  __typename?: 'HistoryEntry';
  description: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrder?: Maybe<Ad>;
};


export type MutationCreateOrderArgs = {
  input?: InputMaybe<Ad>;
};

export type Query = {
  __typename?: 'Query';
  /** Find a single ad by an identifying attribute. */
  ad?: Maybe<Ad>;
};


export type QueryAdArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};

export type GetAdQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetAdQuery = { __typename?: 'Query', ad?: { __typename?: 'Ad', id: UUID } | null };


export const GetAdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAd"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ad"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetAdQuery, GetAdQueryVariables>;