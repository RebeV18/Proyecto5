export const CountryCard = ({ country }) => {
    return (
        <div className='flex flex-col items-center justify-center flex-wrap gap-.8 p-1 rounded-lg shadow-sm duration-.3s hover:scale-1.05 shadow-md-var(--second-color) z-1'>
            <div className='card'>
                <img className='w-90% h-auto z-1' src={country.flags} alt={country.name} />
                <h3 className='text-2 font-medium text-var(--second-color)'>{country.name}</h3>
            </div>
        </div>
    )
}