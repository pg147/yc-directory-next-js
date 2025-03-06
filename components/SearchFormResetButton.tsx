'use client'
import { MultiplicationSignIcon } from 'hugeicons-react';
import Link from 'next/link';

const SearchFormResetButton = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if (form) form.reset();
    }

    return (
        <button type='reset' onClick={reset}>
            <Link href={'/'} className='search-btn text-white lg:hover:text-primary transition-colors duration-200 ease-out'>
                <MultiplicationSignIcon className='size-5' strokeWidth={2.25}/>
            </Link>
        </button>
    )
}

export default SearchFormResetButton