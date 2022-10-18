import { TextField, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'
import axios from 'axios'
import { setImages, setSearchValue, setAmount } from '../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'

function Search() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const { searchValue, amount } = state
 
    async function handleTextChange(event) {
        dispatch(setSearchValue(event.target.value))
        await axios.get(`https://pixabay.com/api/?key=27494832-3df76a6ab6da8e1b1ce2ae5dd&q=${searchValue}&image_type=photo&per_page=${amount}&safesearch=true`)
            .then(res => dispatch(setImages(res.data.hits)))
            .catch(err => console.log(err))
    }

    const handleSelectChange = (event) => {
        dispatch(setAmount(event.target.value))
    }

    return (
        <>
            <TextField
                id="search"
                label="Search Images"
                value={searchValue}
                onChange={handleTextChange}
                fullWidth
                variant='standard'
                color='primary'
                style={{ marginBottom: '12px', marginLeft: '1rem', padddingRight: '1rem'}}
            />
            <FormControl style={{marginLeft: '1rem', marginRight: '1rem'}}>
                <InputLabel>Amount</InputLabel>
                <Select
                    value={amount}
                    label="Amount"
                    onChange={handleSelectChange}
                    style={{ marginBottom: '12px'}}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default Search
