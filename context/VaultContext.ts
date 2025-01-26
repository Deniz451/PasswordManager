import React, { createContext, useState, useContext } from 'react';


interface VaultsContextInterface {
  vaults: any[];
  addVault: () => void;
};

const VaultContext = createContext<VaultsContextInterface | undefined>(undefined);

export const useVaultContext = () => {
  const context = useContext(VaultContext);
  if (!context) {
    throw new Error('useVaults must be used within a VaultsProvider');
  }
  return context;
};

export default VaultContext;

export const VaultProvider: React.FC = ({ children }) => {
  const [vaults, setVaults] = useState<any[]>([]);

  return (
    <VaultContext.Provider value={{ vaults }}>
      {children}
    </VaultContext.Provider>
  );
};
