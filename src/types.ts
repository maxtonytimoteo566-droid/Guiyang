export interface Attraction {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface Food {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  priceRange: string;
}

export interface MetroLine {
  id: string;
  name: string;
  color: string;
  stations: string[];
  description: string;
}
