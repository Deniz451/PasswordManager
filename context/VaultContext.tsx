import React, { createContext, useState, useContext, Children } from 'react';


interface VaultsContextInterface {
  vaults: any[];
  addVault: (vault: any) => void;
};

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
  const [vaults, setVaults] = useState<any[]>([]);

  const addVault = (vault: any) => {
    setVaults((prevVaults) => [...prevVaults, vault]);
  };

  return (
    <VaultContext.Provider value={{ vaults, addVault }}>
      {children}
    </VaultContext.Provider>
  );

};
