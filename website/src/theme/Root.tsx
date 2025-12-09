/**
 * Root - Global wrapper component for Docusaurus
 *
 * This component wraps the entire Docusaurus application.
 * Chatbot functionality has been removed.
 */
import React from 'react';

interface RootProps {
  children: React.ReactNode;
}

export default function Root({ children }: RootProps): JSX.Element {
  return <>{children}</>;
}

