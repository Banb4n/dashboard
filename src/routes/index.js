import UserProfile from '../components/pages/user/UserProfile';
import Bets from '../components/pages/bets/Bets';
import Finance from '../components/pages/finance/Finance';

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
