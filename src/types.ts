export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
}

export type PublicationType = 'Conference' | 'Journal' | 'Workshop' | 'Preprint';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: PublicationType;
  link?: string;
  pdfUrl?: string;
}

export interface Research {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  status: 'Ongoing' | 'Completed';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  status: 'Ongoing' | 'Completed';
}

export interface Member {
  id: string;
  name: string;
  role: 'Faculty' | 'PhD Student' | 'Master Student' | 'Undergraduate' | 'Alumni';
  category: 'Faculty' | 'Students';
  imageUrl: string;
  description: string;
  email?: string;
  website?: string;
}
