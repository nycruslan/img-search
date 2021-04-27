import React from 'react';

class SearchBar extends React.Component {
    state = { term: `` };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <input
                            type='text'
                            placeholder='Search images'
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
