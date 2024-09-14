import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';

import { ModalsContainer } from './styled';

interface SearchModalProps {
    setModalBuscar: () => void;
    refBusca: string;
    setRefBusca: React.Dispatch<React.SetStateAction<string>>;
    buscarProdutoPorRef: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ setModalBuscar, buscarProdutoPorRef, refBusca, setRefBusca }) => {
    return (
        <ModalsContainer>
            <div className='main-modal'>
                <div className='title-main'>
                    <h3>Buscar por REF</h3>
                    <button onClick={setModalBuscar}><IoCloseSharp size={20} /></button>
                </div>
                <div className='search-pesquisa'>
                    <input
                        type="text"
                        placeholder='00.00.0000'
                        value={refBusca}
                        onChange={(e) => setRefBusca(e.target.value)}
                    />
                    <button onClick={buscarProdutoPorRef}>Buscar</button>
                </div>

            </div>
        </ModalsContainer>
    );
};

export default SearchModal;