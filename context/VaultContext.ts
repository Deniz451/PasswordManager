import React, { createContext, useState, ReactNode } from "react";

// Define the shape of a vault item
interface Vault {
  name: string;
  description: string;
}

// Define the shape of the context
interface VaultContextType {
  vaults: Vault[];
  setVaults: React.Dispatch<React.SetStateAction<Vault[]>>;
}

// Create the context
export const VaultContext = createContext<VaultContextType | undefined>(
  undefined
);

// Create the provider component
interface VaultProviderProps {
  children: ReactNode;
}

export const VaultProvider: React.FC<VaultProviderProps> = ({ children }) => {
  const [vaults, setVaults] = useState<Vault[]>([]); // State to hold vault data

};

