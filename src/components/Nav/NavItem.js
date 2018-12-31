/* @flow */
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBox from '@material-ui/icons/AccountBox';
import InsertChart from '@material-ui/icons/InsertChart';
import AttachMoney from '@material-ui/icons/AttachMoney';
import TableChart from '@material-ui/icons/TableChart';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';

import { colors } from '../styleguide/css';

const ROUTES_ICONS = {
    profil: {
        icon: AccountBox
    },
    finance: {
        icon: AttachMoney
    },
    bets: {
        icon: TableChart
    },
    progress: {
        icon: InsertChart
    },
    logout: {
        icon: PowerSettingsNew
    }
};

const STYLES = StyleSheet.create({
    itemColor: {
        color: colors.lightGrey
    },
    hoverColor: {
        color: colors.green
    }
});

function NavItem(props: { route: Object, isActive: boolean }): React.Node {
    const { route, isActive } = props;

    const [isHover, setHovered] = React.useState(false);

    const Icon = ROUTES_ICONS[route.name].icon;

    const onToggleHover = () => setHovered(wasHovered => !wasHovered);

    return (
        <ListItem
            button
            onMouseEnter={onToggleHover}
            onMouseLeave={onToggleHover}
        >
            <ListItemIcon>
                <Icon
                    className={css(
                        STYLES.itemColor,
                        (isHover || isActive) && STYLES.hoverColor
                    )}
                />
            </ListItemIcon>
            <ListItemText>
                <span
                    className={css(
                        STYLES.itemColor,
                        (isHover || isActive) && STYLES.hoverColor
                    )}
                >
                    {route.title}
                </span>
            </ListItemText>
        </ListItem>
    );
}

export default NavItem;
