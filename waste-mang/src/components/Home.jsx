
import Nav from './Nav'
import BuyItemsList from './BuyItemsList'
import { useContext } from 'react';
import { MyContext } from '../MyContext';
export default function Home (){
    const {loggedInUser, setloggedInUser} = useContext(MyContext);

return (
    <>
    <Nav />
    <BuyItemsList />
    </>
)
}