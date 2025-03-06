// Next Form 
import Form from 'next/form'

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

                <button type='submit' className='search-btn text-white'>
                    S
                </button>
            </div>
        </Form>
    )
}

export default SearchForm;