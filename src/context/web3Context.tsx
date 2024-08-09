// context/Web3Context.tsx
import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { ethers, BrowserProvider } from 'ethers';


declare global {
  interface Window {
      ethereum?: any;
  }
}

interface RentStatus {
  address:string;
  dayRent:string;
  startTime:string;
  endTime:string;
  purposeStartDate:string;
  purposeEndDate:string;
  purposeNight:number;
}

interface Web3ContextType {
  account: string | null;
  provider:ethers.BrowserProvider | null;
  status:RentStatus;
  setStatus:React.Dispatch<React.SetStateAction<RentStatus>>;
  connectWallet: () => Promise<void>;
  logout: () => void;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const Web3Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [status, setStatus] = useState<RentStatus>({address:"",dayRent:"",startTime:"",endTime:"",purposeStartDate:"",purposeEndDate:"",  purposeNight:0});

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setProvider(provider)
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    } else {
      console.log('Please install MetaMask');
    }
  };

  const logout = () => {
    setAccount(null);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        })
        .catch((err: Error) => console.error(err));

      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount(null);
        }
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        if (window.ethereum) {
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        }
      };
    }
  }, []);

  return (
    <Web3Context.Provider value={{ account, provider, connectWallet, logout, status, setStatus }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};
