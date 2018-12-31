import UserProfile from '../components/pages/user/UserProfile';
import Bets from '../components/pages/bets/Bets';
import Finance from '../components/pages/finance/Finance';
import Progress from '../components/pages/progress/Progress';

const ROUTES = [
    {
        title: 'Mon profil',
        name: 'profil',
        path: '/profil',
        component: UserProfile
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
        component: Progress
    },
    {
        title: 'Mes finances',
        name: 'finance',
        path: '/finance',
        component: Finance
    }
];

export default ROUTES;
