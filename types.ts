
// Added React import to resolve the 'React' namespace error on line 6
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface Project {
  id: number;
  category: string;
  title: string;
  location: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
