// Next Form 
import Form from 'next/form'

// Icons
import { Search01Icon } from 'hugeicons-react';

// Components
import SearchFormResetButton from './SearchFormResetButton';

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form action={'/'} scroll={false} className='search-form'>
            <input
                name="query"
                defaultValue={query}
                className='search-input'
                placeholder='Search startups'
                type="text"
            />

            <div className='flex gap-2'>
                {query && <SearchFormResetButton />}

                <button type='submit' className='search-btn text-white lg:hover:text-primary transition-colors duration-200 ease-out'>
                    <Search01Icon className='size-5' strokeWidth={2.25}/>
                </button>
            </div>
        </Form>
    )
}

export default SearchForm;