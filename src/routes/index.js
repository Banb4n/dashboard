import UserProfile from '../components/UserProfile';
import Bets from '../components/Bets';
import Finance from '../components/Finance';

const ROUTES = [
    {
        title: 'Mon profil',
        name: 'profil',
        path: '/',
        component: UserProfile
    },
    {
        title: 'Mes finances',
        name: 'finance',
        path: '/finance',
        component: Finance
    },
    {
        title: 'Mes paris',
        name: 'bets',
        path: '/bets',
        component: Bets
    },
    {
        title: 'Ma progression',
        name: 'progress',
        path: '/progress',
        component: Finance
    }
];

export default ROUTES;
