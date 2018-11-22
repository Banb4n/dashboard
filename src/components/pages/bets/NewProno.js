/* @flow */
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import { spacing } from '../../styleguide/css';
import { View } from '../../styleguide';

export type NewPronosValue = {
    team1: string,
    team2: string,
    cote: number,
    amount: number,
    // 1 | N | 2
    choice: '1' | 'N' | '2',
    finish: boolean,
    result: 'win' | 'loose' | null,
    profit: number
};

const CHOICES_VALUES = [
    {
        label: 'Equipe 1',
        value: '1'
    },
    {
        label: 'Nul',
        value: 'N'
    },
    {
        label: 'Equipe 2',
        value: '2'
    }
];

const STYLES = StyleSheet.create({
    formContainer: {
        padding: `${spacing.S300}px ${spacing.S400}px`
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    input: {
        marginRight: spacing.S100,
        marginLeft: spacing.S100
    }
});

function NewProno(props: {}) {
    const [value, setValue] = React.useState({
        isMultiple: false,
        team1: '',
        team2: '',
        choice: null,
        cote: null,
        amount: null,
        date: null,
        result: null
    });

    // const initialFormValue = ({
    //     team1: '',
    //     team2: '',
    //     cote1: 0,
    //     coteN: 0,
    //     cote2: 0,
    //     amount: 0,
    //     choice: 0,
    //     finish: false,
    //     result: null,
    //     profit: 0
    // }: {
    //     team1: string,
    //     team2: string,
    //     cote1: number,
    //     coteN: number,
    //     cote2: number,
    //     amount: number,
    //     choice: number,
    //     finish: boolean,
    //     result: 'win' | 'loose' | null,
    //     profit: number
    // });

    const handleInputChange = (event: SyntheticEvent<*>) => {
        const { name } = event.target;
        const inputValue = event.target.value;

        setValue({
            ...value,
            [name]: inputValue
        });
        console.log({ inputValue, name, value });
    };

    return (
        <Card className={css(STYLES.formContainer)}>
            <h2>Nouveau prono</h2>
            <form>
                <View styles={[STYLES.flexContainer]}>
                    <View styles={[STYLES.input]}>
                        <TextField
                            id="team1"
                            name="team1"
                            label="Equipe 1"
                            margin="dense"
                            value={value.team1}
                            onChange={handleInputChange}
                        />
                    </View>
                    <View styles={[STYLES.input]}>
                        <TextField
                            id="team2"
                            name="team2"
                            label="Equipe 2"
                            margin="dense"
                            value={value.team2}
                            onChange={handleInputChange}
                        />
                    </View>
                </View>
                <View styles={[STYLES.flexContainer]}>
                    <View styles={[STYLES.input]}>
                        <TextField
                            id="cote"
                            name="cote"
                            label="Cote"
                            margin="dense"
                            type="number"
                            value={value.cote1}
                            onChange={handleInputChange}
                        />
                    </View>
                    <View styles={[STYLES.input]}>
                        <TextField
                            id="amount"
                            name="amount"
                            label="Montant"
                            margin="dense"
                            type="number"
                            value={value.amount}
                            onChange={handleInputChange}
                        />
                    </View>
                </View>
                <View styles={[STYLES.flexContainer]}>
                    <View styles={[STYLES.input]}>
                        <TextField
                            select
                            value={value.choice}
                            onChange={handleInputChange}
                            // SelectProps={{
                            //     MenuProps: {
                            //         className: classes.menu
                            //     }
                            // }}
                            label="Votre choix"
                            margin="normal"
                            style={{ width: 200 }}
                        >
                            {CHOICES_VALUES.map(option => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </View>
                    <View styles={[STYLES.input]}>
                        <TextField
                            id="result"
                            name="result"
                            label="resultat"
                            margin="dense"
                            type="number"
                            value={value.result}
                            onChange={handleInputChange}
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                        />
                    </View>
                </View>
            </form>
        </Card>
    );
}

export default NewProno;
