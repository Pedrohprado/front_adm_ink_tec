/* eslint-disable react/prop-types */
function InputSearch({ value, setValue }) {
  return (
    <div className=' w-full flex items-center justify-center'>
      <section className='border'>
        <select
          id='countries'
          name='countries'
          className='px-2 py-1 text-sm'
          value={value.option}
          onChange={({ target }) =>
            setValue((prevState) => ({
              ...prevState,
              option: target.value,
            }))
          }
        >
          <option value='cabin'>cabine de tinta</option>
          <option value='card'>cartão</option>
          <option value='client'>cliente</option>
          <option value='batch'>lote da tinta</option>
          <option value='codeInk'>código da tinta</option>
        </select>

        <input
          type='text'
          placeholder='pesquisar...'
          className='  px-2 py-1 text-sm'
          value={value.search}
          onChange={({ target }) =>
            setValue((prev) => ({
              ...prev,
              search: target.value,
            }))
          }
        />
      </section>
    </div>
  );
}

export default InputSearch;
