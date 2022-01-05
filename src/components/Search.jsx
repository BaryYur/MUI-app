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
            style={{ marginBottom: "1rem", width: "400px" }}
        />
    );    
};

export default Search;