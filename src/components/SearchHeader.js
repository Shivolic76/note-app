import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchHeader = ({ handleSearchNote }) => {
	return (
        <>
        <h1 className='note-heading'>Notes</h1>
		<div className='search'>
			<MdSearch className='search-icons' size='1.3em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Type here to search...'
			/>
		</div>
        </> 
	);
};

export default SearchHeader;
