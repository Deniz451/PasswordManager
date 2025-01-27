import React, { createContext, useState, useContext, Children } from 'react';
import { VaultProps } from '../components/Vault';

interface VaultsContextInterface {
  vaults: VaultProps[];
  addVault: (vault: VaultProps) => void;
}

const VaultContext = createContext<VaultsContextInterface | undefined>(undefined);

export default VaultContext;

export const useVaultContext = () => {
  const context = useContext(VaultContext);
  if (!context) {
    throw new Error('useVaults must be used within a VaultsProvider');
  }
  return context;
};

interface VaultProviderProps {
  children: any;
}

export const VaultProvider: React.FC<VaultProviderProps> = ({ children }) => {
  const [vaults, setVaults] = useState<VaultProps[]>([]);

  const addVault = (vault: VaultProps) => {
    setVaults((prevVaults) => {
      const updatedVaults = [...prevVaults, vault];
      return updatedVaults;
    });
  };

  return (
    <VaultContext.Provider value={{ vaults, addVault }}>
      {children}
    </VaultContext.Provider>
  );

};
