/* @flow */
import React from 'react';
import moment from 'moment';
import MUIDataTable from 'mui-datatables';

function BetTable(props: {
    bets: Object,
    onClick: (
        rowData: Array<String>,
        rowMeta: {
            dataIndex: number,
            rowIndex: number
        }
    ) => void,
    tableOptions: ?Object
}) {
    const { bets, onClick, tableOptions } = props;

    const columns = [
        {
            name: 'id',
            options: {
                display: false
            }
        },
        {
            name: 'Equipe 1'
        },
        {
            name: 'Equipe 2'
        },
        {
            name: 'Montant'
        },
        {
            name: 'Resultat'
        },
        {
            name: 'Cote'
        },
        {
            name: 'Date'
        }
    ];

    const data = bets.map(bet => [
        bet.uid,
        bet.details.team1,
        bet.details.team2,
        bet.details.amount,
        bet.details.result === 'win' ? '✅' : '❌',
        bet.details.cote1,
        moment(bet.date).fromNow()
    ]);

    const options = {
        filterType: 'checkbox',
        onRowClick: onClick,
        selectableRows: false,
        // responsive: 'scroll',
        ...tableOptions
    };

    return <MUIDataTable data={data} columns={columns} options={options} />;
}

export default BetTable;
