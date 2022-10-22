import React from 'react';


class SearchFilter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchText: ""
        }
    }

    async onSearchTextChanged(e) {

        await this.setState({
            searchText: e.target.value
        })

        if ('onChange' in this.props) {
            this.props.onChange(this.state.searchText);
        }

    }


    render() {

        return (
            <div className='row ms-5 mt-3'>
                <form>
                    <div className="col-lg-3 col-md-3">

                        <input
                            value={this.state.searchText}
                            onChange={this.onSearchTextChanged.bind(this)}
                            className='form-control'
                            type="text"
                            placeholder='Search ...' />
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchFilter;