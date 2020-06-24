import { withStyles, TableRow } from '@material-ui/core'

const TableRowMobile = withStyles({
    '@media (max-width: 500px)': {
        root: {
            display: 'grid',
            gridTemplate: 'auto / 1fr 2fr',
        }
    }
})(TableRow)

export default TableRowMobile