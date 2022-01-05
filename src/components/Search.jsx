import { TextField } from "@material-ui/core";

const Search = (props) => {
    const { onChange, value } = props;

    return (
       <TextField 
            type='search' 
            value={value} 
            onChange={onChange} 
            label="Search"
            variant="outlined"
            fullWidth
        />
    );    
};

export default Search;