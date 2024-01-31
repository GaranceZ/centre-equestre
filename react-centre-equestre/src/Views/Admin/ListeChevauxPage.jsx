import React from 'react';
import SidebarAdmin from '../../Components/Admin/SidebarAdmin';
import ListeChevauxComponent from '../../Components/Admin/ListeChevaux';


const ListeChevauxPage = () => {
    return (
        <>
            <SidebarAdmin />
            <ListeChevauxComponent />
        </>
    );
}

export default ListeChevauxPage;